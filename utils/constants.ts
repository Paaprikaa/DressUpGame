// COLORS
export const BACKGROUND = "#F6EFF8";
export const PURPLE = "#A15A92";
export const LILAC_1 = "#EAD2EF";
export const LILAC_2 = "#DAB1E3";
export const LILAC_3 = "#CD96D9";
export const LILAC_4 = "#C687D4";

// PATHS
export const BODY = {
  cat: require("../assets/body/cat/1.png"),
  bunny: require("../assets/body/bunny/1.png"),
};

export type bodyKey = keyof typeof BODY;

export const TOP = {
  1: require("../assets/top/1/1.png"),
  2: require("../assets/top/2/1.png"),
};

export type topKey = keyof typeof TOP;

export const BOTTOM = {
  1: require("../assets/bottom/1/4.png"),
  2: require("../assets/bottom/2/1.png"),
};

export type bottomKey = keyof typeof BOTTOM;

export const SECTION = {
  top: "top",
  bottom: "bottom",
};

export type sectionKey = keyof typeof SECTION;

export const TOP_QUANTITY = 2;
export const BOTTOM_QUANTITY = 2;
