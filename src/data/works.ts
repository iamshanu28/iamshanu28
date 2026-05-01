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

const DEMO_PLAYBACK_ID = "Ee15D017LgFTFnfhmC1XfAHZW3hBIRm1U901u2wQXgCQ8";

export const works: Work[] = [
  {
    id: "01",
    number: "01",
    title: "Doctor",
    subtitle: "Reel 2026",
    tags: ["Motion Design", "Color Grading", "Sound Design"],
    muxPlaybackId: "xdxRm5cuUWQYgM01sgesNUIlIGJ700rNyJQCHKZeFWjP8",
  },
  {
    id: "02",
    number: "02",
    title: "Doctor",
    subtitle: "Reel 2026",
    tags: ["Motion Design", "Color Grading", "Sound Design"],
    muxPlaybackId: "FVAoVC6GpZm6Nf01g3tOkDM402d00FctTUKDHm2w67rUmk",
  },
  {
    id: "03",
    number: "03",
    title: "Doctor",
    subtitle: "Reel 2026",
    tags: ["Motion Design", "Color Grading", "Sound Design"],
    muxPlaybackId: "1ieTV7GHN3DWo00saj6LKDzUaKZUn01P8upynkDIggWG8",
  },
  {
    id: "04",
    number: "04",
    title: "Doctor",
    subtitle: "Reel 2026",
    tags: ["Motion Design", "Color Grading", "Sound Design"],
    muxPlaybackId: "G5dbeET901m98qfwiA2gKdkDRptWZ00BDbCG01IKLp2BPU",
  },
  {
    id: "05",
    number: "05",
    title: "Doctor",
    subtitle: "Reel 2026",
    tags: ["Motion Design", "Color Grading", "Sound Design"],
    muxPlaybackId: "HniFH026FZcaFAAULLsQbKgfK487FIpct7ACwZ3acwm8",
  },
  {
    id: "06",
    number: "06",
    title: "Doctor",
    subtitle: "Reel 2026",
    tags: ["Motion Design", "Color Grading", "Sound Design"],
    muxPlaybackId: "Ee15D017LgFTFnfhmC1XfAHZW3hBIRm1U901u2wQXgCQ8",
  },
];
