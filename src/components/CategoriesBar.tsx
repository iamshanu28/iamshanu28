const CATEGORIES = [
  "Video Editing",
  "Motion Design",
  "Color Grading",
  "Sound Design",
];

export function CategoriesBar() {
  return (
    <div
      className="border-y border-black/15 px-[164px] py-[16px]"
      data-section="categories"
    >
      <ul className="grid grid-cols-4 gap-x-8">
        {CATEGORIES.map((label) => (
          <li
            key={label}
            className="text-[20px] font-light text-ink-muted [font-family:'Intel_One_Mono','JetBrains_Mono',ui-monospace,monospace]"
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}
