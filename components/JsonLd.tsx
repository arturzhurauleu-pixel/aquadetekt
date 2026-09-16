type Props = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

/**
 * Renders one or more JSON-LD blocks. Pass any schema.org object(s):
 * LocalBusiness, Service, FAQPage, BreadcrumbList, WebSite, WebPage...
 */
export default function JsonLd({ data }: Props) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
