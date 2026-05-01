import { useEffect, useRef, useState } from "react";
import MuxPlayer from "@mux/mux-player-react";
import type { Work } from "../data/works";
import posterFallback from "../assets/poster-fallback.jpg";

type VideoCardProps = {
  work: Work;
};

/**
 * Portrait video card matching the Figma design (328x583).
 *
 * Behavior:
 * - All cards autoplay muted in a loop on page load (browsers require muted
 *   for autoplay without user gesture).
 * - On hover/focus, the card restarts the video from 00:00, unmutes, and
 *   plays. Only one card can be unmuted at a time because hover is exclusive.
 * - On leave/blur, the card re-mutes but keeps looping silently.
 * - The Mux Player renders the underlying 16:9 source with object-fit: cover
 *   so the source fills the portrait crop, mirroring the design composition.
 */
export function VideoCard({ work }: VideoCardProps) {
  const playerRef = useRef<HTMLElement | null>(null);
  const [hovered, setHovered] = useState(false);

  // Drive the underlying media element imperatively. JSX-only changes don't
  // unmute already-playing video reliably across browsers, and we also need to
  // seek to 0 on each hover entry.
  useEffect(() => {
    const el = playerRef.current as unknown as HTMLMediaElement | null;
    if (!el) return;

    if (hovered) {
      try {
        el.currentTime = 0;
      } catch {
        // Some browsers throw if the source isn't seekable yet — safe to ignore.
      }
      el.muted = false;
      if (typeof el.play === "function") {
        void el.play().catch(() => {});
      }
    } else {
      el.muted = true;
    }
  }, [hovered]);

  return (
    <article
      className="group relative mx-auto aspect-[328/583] w-full max-w-[328px] overflow-hidden rounded-[11px] bg-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      tabIndex={0}
      aria-label={`${work.title} ${work.subtitle}, work ${work.number}. Hover to unmute.`}
    >
      <div className="absolute inset-0">
        <MuxPlayer
          ref={(node) => {
            playerRef.current = node as unknown as HTMLElement | null;
          }}
          className="mux-cover"
          playbackId={work.muxPlaybackId}
          streamType="on-demand"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={posterFallback}
          nohotkeys
          style={{
            "--controls": "none",
            opacity: hovered ? 1 : 0.74,
            transition: "opacity 300ms ease",
          }}
        />
      </div>

      {/* Decorative overlays — hidden on hover/focus so the video reads cleanly */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ease-out ${
          hovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="card-overlay absolute inset-x-0 bottom-0 h-[38%]" />

        <div className="absolute right-5 top-4 text-right text-[64px] font-extrabold leading-none text-white drop-shadow-md sm:right-7 sm:top-5 sm:text-[80px] lg:right-[37px] lg:top-[27px] lg:text-[96px]">
          {work.number}
        </div>

        <div className="absolute bottom-10 left-5 right-5 text-white sm:left-7 sm:right-7 lg:bottom-[63px] lg:left-[37px] lg:right-[37px]">
          <p className="text-[14px] font-light leading-none sm:text-[16px]">
            {work.number}
          </p>
          <h3 className="mt-[3px] text-[20px] font-extrabold leading-tight sm:text-[22px] lg:text-[24px]">
            {work.title}
          </h3>
          <p className="mt-[1px] text-[20px] font-extrabold leading-tight sm:text-[22px] lg:text-[24px]">
            {work.subtitle}
          </p>
          <p className="mt-[10px] text-[10px] font-light leading-none">
            {work.tags.join(" | ")}
          </p>
        </div>
      </div>
    </article>
  );
}
