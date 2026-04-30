export type Work = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tags: string[];
  /**
   * Mux playback ID for the 16:9 source video.
   * Replace these with your own Mux playback IDs from https://dashboard.mux.com.
   * The placeholder below is Mux's public demo asset and is safe to use while developing.
   */
  muxPlaybackId: string;
};

const DEMO_PLAYBACK_ID = "DS00Spx1CV902MCtPj5WknGlR102V5HFkDe";

export const works: Work[] = [
  {
    id: "01",
    number: "01",
    title: "Doctor",
    subtitle: "Reel 2026",
    tags: ["Motion Design", "Color Grading", "Sound Design"],
    muxPlaybackId: DEMO_PLAYBACK_ID,
  },
  {
    id: "02",
    number: "02",
    title: "Doctor",
    subtitle: "Reel 2026",
    tags: ["Motion Design", "Color Grading", "Sound Design"],
    muxPlaybackId: DEMO_PLAYBACK_ID,
  },
  {
    id: "03",
    number: "03",
    title: "Doctor",
    subtitle: "Reel 2026",
    tags: ["Motion Design", "Color Grading", "Sound Design"],
    muxPlaybackId: DEMO_PLAYBACK_ID,
  },
  {
    id: "04",
    number: "04",
    title: "Doctor",
    subtitle: "Reel 2026",
    tags: ["Motion Design", "Color Grading", "Sound Design"],
    muxPlaybackId: DEMO_PLAYBACK_ID,
  },
  {
    id: "05",
    number: "05",
    title: "Doctor",
    subtitle: "Reel 2026",
    tags: ["Motion Design", "Color Grading", "Sound Design"],
    muxPlaybackId: DEMO_PLAYBACK_ID,
  },
  {
    id: "06",
    number: "06",
    title: "Doctor",
    subtitle: "Reel 2026",
    tags: ["Motion Design", "Color Grading", "Sound Design"],
    muxPlaybackId: DEMO_PLAYBACK_ID,
  },
];
