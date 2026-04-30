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

      <h2
        aria-hidden="true"
        className="mt-[85px] select-none whitespace-nowrap pr-[83px] text-right text-[128px] font-extrabold leading-none tracking-tight text-black/[0.08]"
      >
        Video Editing
      </h2>
    </section>
  );
}
