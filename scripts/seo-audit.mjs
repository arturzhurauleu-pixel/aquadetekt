#!/usr/bin/env node
/**
 * scripts/seo-audit.mjs
 * Automated SEO/content audit. Parses data/*.ts as text (no build required)
 * and cross-references against the actual app/ route tree on disk.
 * USAGE: node scripts/seo-audit.mjs
 */

import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => readFileSync(path.join(ROOT, p), "utf8");

function findFiles(dir, pattern, out = []) {
  const full = path.join(ROOT, dir);
  let entries;
  try {
    entries = readdirSync(full, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const e of entries) {
    const rel = path.join(dir, e.name);
    if (e.isDirectory()) findFiles(rel, pattern, out);
    else if (e.name === pattern) out.push(rel);
  }
  return out;
}

function allSourceFiles() {
  const out = [];
  function walk(dir) {
    let entries;
    try {
      entries = readdirSync(path.join(ROOT, dir), { withFileTypes: true });
    } catch {
      return;
    }
    for (const e of entries) {
      const rel = path.join(dir, e.name);
      if (e.isDirectory()) walk(rel);
      else if (e.name.endsWith(".ts") || e.name.endsWith(".tsx")) out.push(rel);
    }
  }
  ["app", "components", "lib", "data"].forEach(walk);
  return out;
}

let issues = 0;
let warnings = 0;
const fail = (msg) => { console.log(`FAIL: ${msg}`); issues++; };
const warn = (msg) => { console.log(`WARN: ${msg}`); warnings++; };
const ok = (msg) => console.log(`PASS: ${msg}`);

console.log("=".repeat(70));
console.log("AQUADETEKT SEO AUDIT -", new Date().toISOString());
console.log("=".repeat(70));

// 1. ROUTE INVENTORY
const pageFiles = findFiles("app", "page.tsx");
const dynamicWrappers = pageFiles.filter((p) => p.includes("[slug]") || p.includes("[city]"));
const literalRoutes = pageFiles.filter((p) => !p.includes("[slug]") && !p.includes("[city]"));

const servicesTs = read("data/services.ts");
const citiesTs = read("data/cities.ts");
const blogTs = read("data/blog.ts");
const caseStudiesTs = read("data/case-studies.ts");
const siteTs = read("data/site.ts");

const services = [...servicesTs.matchAll(/\{\s*\n\s*slug: "([a-z0-9-]+)"/g)].map((m) => m[1]);
const canonicalOverrides = [...servicesTs.matchAll(/canonicalTargetSlug: "([a-z0-9-]+)"/g)].map((m) => {
  const before = servicesTs.slice(0, m.index);
  const slugMatches = [...before.matchAll(/slug: "([a-z0-9-]+)"/g)];
  return { slug: slugMatches[slugMatches.length - 1][1], target: m[1] };
});
const cities = [...citiesTs.matchAll(/\{\s*\n\s*slug: "([a-z0-9-]+)"/g)].map((m) => m[1]);
const cityBlocks = [...citiesTs.matchAll(/slug: "([a-z0-9-]+)"[\s\S]*?localServicePages: \[([^\]]*)\]/g)];
const comboRoutes = [];
for (const m of cityBlocks) {
  const [, citySlug, raw] = m;
  for (const svcMatch of raw.matchAll(/"([a-z0-9-]+)"/g)) comboRoutes.push(`${svcMatch[1]}-${citySlug}`);
}
const blogPostsBlock = blogTs.split("export const blogBacklog")[0];
const blogPosts = [...blogPostsBlock.matchAll(/slug: "([a-z0-9-]+)"/g)].map((m) => m[1]);
const backlogBlock = blogTs.split("export const blogBacklog")[1] || "";
const backlogCount = [...backlogBlock.matchAll(/\n  \{\s*\n\s*title:/g)].length;
const caseStudies = [...caseStudiesTs.matchAll(/slug: "([a-z0-9-]+)"/g)].map((m) => m[1]);

console.log("\n--- ROUTE INVENTORY ---");
console.log(`Total page.tsx files on disk: ${pageFiles.length}`);
console.log(`  Literal routes: ${literalRoutes.length}`);
console.log(`  Dynamic wrapper templates: ${dynamicWrappers.length} (${dynamicWrappers.join(", ")})`);
console.log(`Services: ${services.length} (canonical-merged: ${canonicalOverrides.map((c) => `${c.slug}->${c.target}`).join(", ") || "none"})`);
console.log(`Cities: ${cities.length}`);
console.log(`Service x city combo routes (derived from data): ${comboRoutes.length}`);
console.log(`Published blog posts: ${blogPosts.length}`);
console.log(`Backlog topics with explicit decision: ${backlogCount}`);
console.log(`Case studies: ${caseStudies.length}`);

// 2. SITEMAP RECONCILIATION
console.log("\n--- SITEMAP RECONCILIATION ---");
const staticRoutesMatch = read("app/sitemap.ts").match(/const staticRoutes = \[([^\]]*)\]/);
const staticPaths = staticRoutesMatch ? [...staticRoutesMatch[1].matchAll(/"([^"]*)"/g)].map((m) => m[1] || "/") : [];
const sitemapUrls = new Set(staticPaths.map((p) => p || "/"));
for (const s of services) if (!canonicalOverrides.some((c) => c.slug === s)) sitemapUrls.add(`/${s}`);
sitemapUrls.add("/lokalizacja-wyciekow-bez-kucia");
for (const c of cities) sitemapUrls.add(`/hydraulik-${c}`);
for (const r of comboRoutes) sitemapUrls.add(`/${r}`);
for (const b of blogPosts) sitemapUrls.add(`/blog/${b}`);
for (const cs of caseStudies) sitemapUrls.add(`/realizacje/${cs}`);

const realUrls = new Set();
for (const p of literalRoutes) realUrls.add(p.replace(/^app/, "").replace(/\/page\.tsx$/, "") || "/");
for (const b of blogPosts) realUrls.add(`/blog/${b}`);
for (const cs of caseStudies) realUrls.add(`/realizacje/${cs}`);

const inSitemapNotReal = [...sitemapUrls].filter((u) => !realUrls.has(u));
const canonicalMergedPaths = new Set(canonicalOverrides.map((c) => `/${c.slug}`));
const realNotInSitemap = [...realUrls].filter((u) => !sitemapUrls.has(u) && !canonicalMergedPaths.has(u));
const intentionallyExcluded = [...realUrls].filter((u) => !sitemapUrls.has(u) && canonicalMergedPaths.has(u));
console.log(`Sitemap URLs (computed): ${sitemapUrls.size} | Real reachable routes: ${realUrls.size}`);
if (intentionallyExcluded.length) console.log(`Intentionally excluded from sitemap (canonical points elsewhere, page still reachable): ${intentionallyExcluded.join(", ")}`);
if (inSitemapNotReal.length === 0 && realNotInSitemap.length === 0) ok(`sitemap reconciles exactly - ${sitemapUrls.size} sitemap + ${intentionallyExcluded.length} intentionally-excluded = ${realUrls.size} real routes`);
else {
  if (inSitemapNotReal.length) fail(`In sitemap but no real route: ${inSitemapNotReal.join(", ")}`);
  if (realNotInSitemap.length) fail(`Real route missing from sitemap (and NOT a known canonical-merge): ${realNotInSitemap.join(", ")}`);
}

// 3. PLACEHOLDER LEAKAGE
console.log("\n--- PLACEHOLDER LEAKAGE (literal terms) ---");
const allFiles = allSourceFiles();
const literalTerms = ["TODO", "TBD", "[distance]", "[city]", "[slug]", "lorem", "dummy", "example.com"];
let placeholderHits = 0;
for (const f of allFiles) {
  const content = read(f);
  for (const term of literalTerms) {
    const idx = content.indexOf(term);
    if (idx !== -1) {
      const line = content.slice(0, idx).split("\n").length;
      const lineText = content.split("\n")[line - 1].trim();
      const isComment = lineText.startsWith("//") || lineText.startsWith("*") || lineText.startsWith("/*");
      if (!isComment) { fail(`Literal "${term}" in non-comment code: ${f}:${line} -> ${lineText.slice(0, 80)}`); placeholderHits++; }
    }
  }
}
if (placeholderHits === 0) ok("0 literal TODO/TBD/[city]/[slug]/lorem/dummy/example.com outside comments");

const filesRenderingBusinessPlaceholders = new Set();
for (const f of allFiles) {
  if (f === "data/site.ts") continue;
  if (/site\.(name|phone|email|address\.|legalName|domain|openingHours|googleBusinessProfileUrl|googleMapsEmbedUrl)\b/.test(read(f))) {
    filesRenderingBusinessPlaceholders.add(f);
  }
}
console.log(`Business-identity placeholders (data/site.ts) render into ${filesRenderingBusinessPlaceholders.size} files (pre-existing documented production blocker, not counted as new failure).`);

// 4. TITLE / H1 / DESCRIPTION UNIQUENESS
console.log("\n--- TITLE / H1 / DESCRIPTION UNIQUENESS ---");
function collectDupes(regex, source, label) {
  const matches = [...source.matchAll(regex)].map((m) => m[1]);
  const counts = {};
  matches.forEach((x) => (counts[x] = (counts[x] || 0) + 1));
  const dupes = Object.entries(counts).filter(([, c]) => c > 1);
  if (dupes.length) dupes.forEach(([val, c]) => fail(`Duplicate ${label} (${c}x): "${val}"`));
  else ok(`${label}: ${matches.length} checked, 0 duplicates`);
  return matches.length;
}
collectDupes(/metaTitle: "([^"]+)"/g, servicesTs + citiesTs + blogPostsBlock, "metaTitle");
collectDupes(/h1: "([^"]+)"/g, servicesTs + blogPostsBlock, "H1 (services+blog)");

// 5. FAQ ANSWER DUPLICATION
console.log("\n--- FAQ ANSWER DUPLICATION (local-service-content.ts) ---");
const localServiceContent = read("lib/local-service-content.ts");
const faqAnswers = [...localServiceContent.matchAll(/answer:\s*\n?\s*(?:`([^`]+)`|"([^"]+)")/g)].map((m) => m[1] || m[2]);
const answerCounts = {};
faqAnswers.forEach((a) => (answerCounts[a] = (answerCounts[a] || 0) + 1));
const dupedAnswers = Object.entries(answerCounts).filter(([, c]) => c > 1);
if (dupedAnswers.length) dupedAnswers.forEach(([a, c]) => warn(`Static FAQ answer template reused ${c}x (by design, per-service not per-city): "${a.slice(0, 60)}..."`));
else ok("No verbatim-duplicated static FAQ answer templates found");

// 6. CITY CONTENT UNIQUENESS
console.log("\n--- CITY CONTENT UNIQUENESS ---");
collectDupes(/distanceNote:\s*"([^"]+)"/g, citiesTs, "distanceNote");
const localAngles = [...citiesTs.matchAll(/localAngle:\s*\n?\s*"([^"]+)"/g)].map((m) => m[1]);
const angleCounts = {};
localAngles.forEach((a) => (angleCounts[a] = (angleCounts[a] || 0) + 1));
const dupedAngles = Object.entries(angleCounts).filter(([, c]) => c > 1);
if (dupedAngles.length) dupedAngles.forEach(([a]) => fail(`Duplicate localAngle text: "${a.slice(0, 60)}..."`));
else ok(`localAngle: ${localAngles.length} checked, 0 duplicates`);
console.log(`Cities with a real districts list: ${[...citiesTs.matchAll(/districts: \[/g)].length} (expected 1 - only Gdansk)`);

// 7. SCHEMA / TRUST SIGNALS
console.log("\n--- SCHEMA / TRUST SIGNALS ---");
let hasAggregateRating = false;
for (const f of allFiles) if (read(f).includes("AggregateRating")) hasAggregateRating = true;
if (hasAggregateRating) fail("AggregateRating schema found - must not exist without real reviews");
else ok("No AggregateRating schema anywhere in codebase");
if (siteTs.match(/reviews: \[\] as/)) ok("site.socialProof.reviews is an empty array (no fake reviews)");
else warn("Could not confirm reviews array is empty by regex - manual check recommended");
let suspiciousClaim = false;
for (const term of ["5.0/5", "setki zadowolonych", "gwarancja satysfakcji"]) {
  for (const f of allFiles) if (read(f).includes(term)) { fail(`Suspicious trust-claim phrase found: "${term}" in ${f}`); suspiciousClaim = true; }
}
if (!suspiciousClaim) ok("No fabricated trust-claim phrases found");

console.log(`\n${"=".repeat(70)}`);
console.log(`SUMMARY: ${issues} FAIL, ${warnings} WARN`);
console.log("=".repeat(70));
process.exit(0);
