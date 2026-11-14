type P = { size?: number };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

export const ArrowUpRight = ({ size = 16 }: P) => (
  <svg {...base(size)}><path d="M7 17L17 7M8 7h9v9" /></svg>
);
export const ArrowRight = ({ size = 18 }: P) => (
  <svg {...base(size)}><path d="M5 12h14M12 5l7 7-7 7" /></svg>
);
export const ArrowLeft = ({ size = 18 }: P) => (
  <svg {...base(size)}><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
);
export const Code = ({ size = 16 }: P) => (
  <svg {...base(size)}><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>
);
export const Download = ({ size = 16 }: P) => (
  <svg {...base(size)}><path d="M12 4v11M7 11l5 5 5-5M5 20h14" /></svg>
);
export const Plus =({ size = 22 }: P) => (
  <svg {...base(size)}><path d="M12 5v14M5 12h14" /></svg>
);
export const Search = ({ size = 18 }: P) => (
  <svg {...base(size)}><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
);
export const Menu = ({ size = 22 }: P) => (
  <svg {...base(size)}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const Close = ({ size = 22 }: P) => (
  <svg {...base(size)}><path d="M6 6l12 12M18 6L6 18" /></svg>
);
