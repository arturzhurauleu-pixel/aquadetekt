type IconName = "wrench" | "droplet" | "wind" | "thermometer" | "search" | "gauge";

const paths: Record<IconName, string> = {
  wrench:
    "M14.7 6.3a4 4 0 00-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-2.5 2.5-2-2 2.5-2.5z",
  droplet: "M12 2s6 7.2 6 11.2A6 6 0 016 13.2C6 9.2 12 2 12 2z",
  wind: "M3 8h10a2.5 2.5 0 100-5M3 16h14a2.5 2.5 0 110 5M3 12h7",
  thermometer: "M10 14V4a2 2 0 114 0v10a4 4 0 11-4 0z",
  search: "M11 4a7 7 0 105.3 12.1l3.8 3.8 1.4-1.4-3.8-3.8A7 7 0 0011 4zM6 11a5 5 0 1110 0 5 5 0 01-10 0z",
  gauge: "M12 21a9 9 0 100-18 9 9 0 000 18zM12 12l4-4M12 12v.01",
};

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d={paths[name]} />
    </svg>
  );
}
