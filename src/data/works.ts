export type Work = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tags: string[];
  /** Mux playback ID for the 16:9 source video (from https://dashboard.mux.com). */
  muxPlaybackId: string;
};

export const works: Work[] = [
  {
    id: "01",
    number: "01",
    title: "Medical",
    subtitle: "Reel 2026",
    tags: ["Motion Design", "Color Grading", "Sound Design"],
    muxPlaybackId: "xdxRm5cuUWQYgM01sgesNUIlIGJ700rNyJQCHKZeFWjP8",
  },
  {
    id: "02",
    number: "02",
    title: "Real Estate",
    subtitle: "Reel 2026",
    tags: ["Motion Design", "Color Grading", "Sound Design"],
    muxPlaybackId: "FVAoVC6GpZm6Nf01g3tOkDM402d00FctTUKDHm2w67rUmk",
  },
  {
    id: "03",
    number: "03",
    title: "Medical",
    subtitle: "Reel 2026",
    tags: ["Motion Design", "Color Grading", "Sound Design"],
    muxPlaybackId: "6ZhinY4M89jaGnzse028n5Wj8QZye00uUVQkdB6uH34zw",
  },
  {
    id: "04",
    number: "04",
    title: "Informational",
    subtitle: "Reel 2026",
    tags: ["Motion Design", "Color Grading", "Sound Design"],
    muxPlaybackId: "1ieTV7GHN3DWo00saj6LKDzUaKZUn01P8upynkDIggWG8",
  },
  {
    id: "05",
    number: "05",
    title: "Podcast",
    subtitle: "Reel 2026",
    tags: ["Motion Design", "Color Grading", "Sound Design"],
    muxPlaybackId: "HniFH026FZcaFAAULLsQbKgfK487FIpct7ACwZ3acwm8",
  },
  {
    id: "06",
    number: "06",
    title: "Informational",
    subtitle: "Reel 2026",
    tags: ["Motion Design", "Color Grading", "Sound Design"],
    muxPlaybackId: "G5dbeET901m98qfwiA2gKdkDRptWZ00BDbCG01IKLp2BPU",
  },
];
