import premierePro from "../assets/premiere-pro.png";
import afterEffects from "../assets/after-effects.png";
import davinciResolve from "../assets/davinci-resolve.png";
import profilePhoto from "../assets/profile.jpg";
import emailIcon from "../assets/email.png";
import instagramIcon from "../assets/instagram.png";

const EMAIL = "iamshanukumar@gmail.com";
const INSTAGRAM_HANDLE = "iamshanukumar";
const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;

export default function Contact() {
  return (
    <section
      className="grid grid-cols-1 gap-y-10 px-6 pt-12 pb-16 sm:px-10 sm:pt-16 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0 lg:px-[89px] lg:pt-[100px] lg:pb-[200px]"
      data-section="contact"
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

      <div className="flex flex-col gap-8 lg:col-span-7 lg:gap-10">
        <img
          src={profilePhoto}
          alt="Shanu Kumar portrait"
          className="h-[200px] w-[200px] rounded-[10px] object-cover sm:h-[240px] sm:w-[240px] lg:h-[263px] lg:w-[263px]"
        />

        <div>
          <p className="max-w-[687px] text-[18px] font-light leading-snug text-hero-gradient sm:text-[20px] lg:text-[24px]">
            Hi, I&apos;m Shanu Kumar, a creative video editor with skills in
            motion design, color grading, and sound design. I enjoy turning raw
            footage into engaging visual stories and always focus on clean
            edits, smooth transitions, and strong visual impact.{" "}
            <span aria-hidden="true">🎬✨</span>
          </p>

          <a
            href="/#about"
            className="mt-5 inline-flex items-center justify-center rounded-[10px] px-[10px] py-[2px] text-[16px] font-light text-black transition-colors hover:bg-black/5 lg:mt-[26px]"
          >
            About
          </a>
        </div>

        <ul
          className="flex flex-col gap-[14px] [font-family:'Intel_One_Mono','JetBrains_Mono',ui-monospace,monospace]"
          aria-label="Contact methods"
        >
          <li>
            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex items-center gap-3 text-[16px] font-light text-ink-muted transition-colors hover:text-black sm:text-[18px] lg:text-[20px]"
            >
              <img
                src={emailIcon}
                alt=""
                aria-hidden="true"
                className="h-[18px] w-[18px] object-contain"
              />
              <span>Mail- {EMAIL}</span>
            </a>
          </li>
          <li>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-[16px] font-light text-ink-muted transition-colors hover:text-black sm:text-[18px] lg:text-[20px]"
            >
              <img
                src={instagramIcon}
                alt=""
                aria-hidden="true"
                className="h-[18px] w-[18px] object-contain"
              />
              <span>{INSTAGRAM_HANDLE}</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
