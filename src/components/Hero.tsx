import premierePro from "../assets/premiere-pro.png";
import afterEffects from "../assets/after-effects.png";
import davinciResolve from "../assets/davinci-resolve.png";

export function Hero() {
  return (
    <section
      className="grid grid-cols-1 gap-y-10 px-6 pt-12 pb-10 sm:px-10 sm:pt-16 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0 lg:px-[89px] lg:pt-[100px]"
      data-section="hero"
    >
      <div className="lg:col-span-5">
        <p className="text-[18px] font-semibold leading-none sm:text-[20px]">
          Shanu Kumar
        </p>
        <p className="mt-2 text-[12px] font-normal text-black">
          Video Editor / Graphic Designer / UI UX Designer
        </p>

        <div
          className="mt-6 flex items-center gap-[6px] sm:mt-9"
          aria-label="Tools I use"
        >
          <img
            src={premierePro}
            alt="Adobe Premiere Pro"
            className="h-[30px] w-[30px] rounded-[6px] object-cover"
          />
          <img
            src={afterEffects}
            alt="Adobe After Effects"
            className="h-[30px] w-[31px] rounded-[6px] object-cover"
          />
          <img
            src={davinciResolve}
            alt="DaVinci Resolve Studio"
            className="-mt-1 h-[39px] w-[39px] rounded-[6px] object-cover"
          />
        </div>
      </div>

      <div className="lg:col-span-7">
        <p className="max-w-[687px] text-[18px] font-light leading-snug text-hero-gradient sm:text-[20px] lg:text-[24px]">
          Hi, I&apos;m Shanu Kumar, a creative video editor with skills in
          motion design, color grading, and sound design. I enjoy turning raw
          footage into engaging visual stories and always focus on clean edits,
          smooth transitions, and strong visual impact.{" "}
          <span aria-hidden="true">🎬✨</span>
        </p>

        <a
          href="#about"
          className="mt-5 inline-flex items-center justify-center rounded-[10px] px-[10px] py-[2px] text-[16px] font-light text-black transition-colors hover:bg-black/5 lg:mt-[26px]"
        >
          About
        </a>
      </div>
    </section>
  );
}
