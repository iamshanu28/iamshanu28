import premierePro from "../assets/premiere-pro.png";
import afterEffects from "../assets/after-effects.png";
import davinciResolve from "../assets/davinci-resolve.png";

export function Hero() {
  return (
    <section
      className="grid grid-cols-12 gap-x-8 px-[89px] pt-[100px] pb-10"
      data-section="hero"
    >
      <div className="col-span-5">
        <p className="text-[20px] font-semibold leading-none">Shanu Kumar</p>
        <p className="mt-2 text-[12px] font-normal text-black">
          Video Editor / Graphic Designer / UI UX Designer
        </p>

        <div
          className="mt-9 flex items-center gap-[6px]"
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
            className="h-[39px] w-[39px] -mt-1 rounded-[6px] object-cover"
          />
        </div>
      </div>

      <div className="col-span-7">
        <p className="max-w-[687px] text-[24px] font-light leading-snug text-hero-gradient">
          Hi, I&apos;m Shanu Kumar, a creative video editor with skills in
          motion design, color grading, and sound design. I enjoy turning raw
          footage into engaging visual stories and always focus on clean edits,
          smooth transitions, and strong visual impact.{" "}
          <span aria-hidden="true">🎬✨</span>
        </p>
      </div>
    </section>
  );
}
