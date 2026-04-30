import { works } from "../data/works";
import { VideoCard } from "./VideoCard";

export function WorkSection() {
  return (
    <section
      id="work"
      className="relative pb-10 pt-12 sm:pt-16 lg:pt-[96px] lg:pb-[40px]"
      data-section="work"
    >
      <div className="px-6 sm:px-10 lg:px-[154px]">
        <span
          className="inline-flex items-center justify-center rounded-[18px] bg-black px-[14px] py-[3px] text-[18px] font-normal text-white sm:text-[20px]"
          aria-hidden="true"
        >
          Work
        </span>
      </div>

      <div className="mt-8 flex justify-center px-6 sm:mt-12 sm:px-10 lg:mt-[57px] lg:px-0">
        <div className="grid w-full max-w-[1080px] grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-x-[44px] lg:gap-y-[21px]">
          {works.map((work) => (
            <VideoCard key={work.id} work={work} />
          ))}
        </div>
      </div>

      <h2
        aria-hidden="true"
        className="mt-12 select-none whitespace-nowrap pr-4 text-right text-[16vw] font-extrabold leading-none tracking-tight text-black/[0.08] sm:pr-8 lg:mt-[85px] lg:pr-[83px] lg:text-[128px]"
      >
        Video Editing
      </h2>
    </section>
  );
}
