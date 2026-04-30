const CATEGORIES = [
  "Video Editing",
  "Motion Design",
  "Color Grading",
  "Sound Design",
];

export function CategoriesBar() {
  // Two copies of the same list make the right-to-left scroll seamless: when
  // the first copy has shifted -50%, the second one is exactly where the first
  // started, so the animation can restart with no visible jump.
  const items = [...CATEGORIES, ...CATEGORIES];

  return (
    <div
      className="marquee border-y border-black/15 py-3 sm:py-4 lg:py-[16px]"
      data-section="categories"
      aria-label="Specialties"
    >
      <ul
        className="marquee-track items-center gap-10 sm:gap-16 lg:gap-[156px]"
        aria-hidden="true"
      >
        {items.map((label, idx) => (
          <li
            key={`${label}-${idx}`}
            className="shrink-0 text-[14px] font-light text-ink-muted sm:text-[16px] lg:text-[20px] [font-family:'Intel_One_Mono','JetBrains_Mono',ui-monospace,monospace]"
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}
