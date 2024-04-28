export const LARGE_AND_ABOVE = "largeAndAbove";

const BREAKPOINT_NAMES = {
  LARGE: "large",
  MEDIUM: "medium",
  SMALL: "small",
};

const breakpoint = {
  [BREAKPOINT_NAMES.LARGE]: 1128,
  [BREAKPOINT_NAMES.MEDIUM]: 744,
  [BREAKPOINT_NAMES.SMALL]: 327,
};

const responsive = {
  [LARGE_AND_ABOVE]: `@media (min-width: ${breakpoint[BREAKPOINT_NAMES.LARGE]}px)`,
  [BREAKPOINT_NAMES.SMALL]: `@media (max-width: ${breakpoint[BREAKPOINT_NAMES.MEDIUM] - 1}px)`,
  print: "@media print",
};

export const unit = 4;

export default {
  // 색상
  color: {
    primary: "#03a9f4", // 주 색상
    secondary: "#795548", // 부 색상
    white: "#FFFFFF",
    gray: "#CCCCCC",
    default: "#999999",
    error: "#FF0000",
  },

  // 글꼴 크기
  size: {
    h1: 48,
    h2: 36,
    h3: 28,
    xg: 24,
    lg: 18,
    md: 14,
    sm: 12,
    xs: 10,
  },

  lineHeight: {
    xg: "60px",
    lg: "54px",
    md: "36px",
    sm: "24px",
    xs: "18px",
  },

  depth: {
    level1: {
      boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.14)",
    },
    level2: {
      boxShadow: "0 4px 5px 0 rgba(0, 0, 0, 0.14)",
    },
    level3: {
      boxShadow: "0 8px 17px 12px rgba(0, 0, 0, 0.14)",
    },
  },

  // 길이 단위
  unit,

  // 화면해상도 (반응형)
  responsive,
};
