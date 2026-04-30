import { useRef, useState } from "react";
import MuxPlayer from "@mux/mux-player-react";
import type { Work } from "../data/works";
import posterFallback from "../assets/poster-fallback.jpg";

type VideoCardProps = {
  work: Work;
};

/**
 * Portrait video card matching the Figma design (328x583).
 * The Mux Player renders the underlying 16:9 source with object-fit: cover so
 * the source video fills the portrait crop, mirroring the design composition.
 * Hovering plays the video; leaving pauses and resets to poster.
 */
export function VideoCard({ work }: VideoCardProps) {
  const playerRef = useRef<HTMLElement | null>(null);
  const [hovered, setHovered] = useState(false);

  const handleEnter = () => {
    setHovered(true);
    const el = playerRef.current as unknown as HTMLMediaElement | null;
    if (el && typeof el.play === "function") {
      void el.play().catch(() => {});
    }
  };

  const handleLeave = () => {
    setHovered(false);
    const el = playerRef.current as unknown as HTMLMediaElement | null;
    if (el && typeof el.pause === "function") {
      el.pause();
      el.currentTime = 0;
    }
  };

  return (
    <article
      className="group relative h-[583px] w-[328px] overflow-hidden rounded-[11px] bg-card"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
      tabIndex={0}
      aria-label={`${work.title} ${work.subtitle}, work ${work.number}`}
    >
      <div className="absolute inset-0">
        <MuxPlayer
          ref={(node) => {
            playerRef.current = node as unknown as HTMLElement | null;
          }}
          className="mux-cover"
          playbackId={work.muxPlaybackId}
          streamType="on-demand"
          muted
          loop
          playsInline
          preload="metadata"
          poster={posterFallback}
          autoPlay={false}
          /* Hide built-in controls — design intent is silent autoplay-on-hover */
          nohotkeys
          style={{
            "--controls": "none",
            opacity: hovered ? 1 : 0.74,
            transition: "opacity 300ms ease",
          }}
        />
      </div>

      <div className="card-overlay pointer-events-none absolute inset-x-0 bottom-0 h-[222px]" />

      <div className="absolute right-[37px] top-[27px] text-right text-[96px] font-extrabold leading-none text-white drop-shadow-md">
        {work.number}
      </div>

      <div className="absolute left-[37px] right-[37px] bottom-[63px] text-white">
        <p className="text-[16px] font-light leading-none">{work.number}</p>
        <h3 className="mt-[3px] text-[24px] font-extrabold leading-tight">
          {work.title}
        </h3>
        <p className="mt-[1px] text-[24px] font-extrabold leading-tight">
          {work.subtitle}
        </p>
        <p className="mt-[10px] text-[10px] font-light leading-none">
          {work.tags.join(" | ")}
        </p>
      </div>
    </article>
  );
}
