import { works } from "../data/works";
import { VideoCard } from "./VideoCard";

export function WorkSection() {
  return (
    <section
      id="work"
      className="relative pt-[96px] pb-[40px]"
      data-section="work"
    >
      <div className="px-[154px]">
        <span
          className="inline-flex items-center justify-center rounded-[18px] bg-black px-[14px] py-[3px] text-[20px] font-normal text-white"
          aria-hidden="true"
        >
          Work
        </span>
      </div>

      <div className="mt-[57px] flex justify-center">
        <div className="grid grid-cols-3 gap-x-[44px] gap-y-[21px]">
          {works.map((work) => (
            <VideoCard key={work.id} work={work} />
          ))}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="mt-[85px] flex justify-end pr-[83px]"
      >
        <svg
          viewBox="0 0 980 140"
          preserveAspectRatio="xMaxYMid meet"
          className="block h-auto w-full max-w-[1100px]"
        >
          <text
            x="100%"
            y="115"
            textAnchor="end"
            fill="none"
            stroke="rgba(0,0,0,0.25)"
            strokeWidth="1"
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: "128px",
              fontWeight: 900,
              letterSpacing: "-2px",
            }}
          >
            Video Editing
          </text>
        </svg>
      </div>
    </section>
  );
}
