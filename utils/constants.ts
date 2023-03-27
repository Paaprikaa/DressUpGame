// COLORS
export const WHITE = "#FFFFFF";
export const YELLOW = "#F0E1AA";
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
  1: {
    1: require("../assets/top/1/1.png"),
    2: require("../assets/top/1/2.png"),
    3: require("../assets/top/1/3.png"),
    4: require("../assets/top/1/4.png"),
    5: require("../assets/top/1/5.png"),
  },
  2: {
    1: require("../assets/top/2/1.png"),
    2: require("../assets/top/2/2.png"),
    3: require("../assets/top/2/3.png"),
    4: require("../assets/top/2/4.png"),
    5: require("../assets/top/2/5.png"),
  },
};

export type topKey = keyof typeof TOP;

export const BOTTOM = {
  1: {
    1: require("../assets/bottom/1/1.png"),
    2: require("../assets/bottom/1/2.png"),
    3: require("../assets/bottom/1/3.png"),
    4: require("../assets/bottom/1/4.png"),
    5: require("../assets/bottom/1/5.png"),
  },
  2: {
    1: require("../assets/bottom/2/1.png"),
    2: require("../assets/bottom/2/2.png"),
    3: require("../assets/bottom/2/3.png"),
    4: require("../assets/bottom/2/4.png"),
    5: require("../assets/bottom/2/5.png"),
  },
};

export type bottomKey = keyof typeof BOTTOM;

export const SECTION = {
  top: "top",
  bottom: "bottom",
};

export type sectionKey = keyof typeof SECTION;

export const TOP_QUANTITY = 2;
export const BOTTOM_QUANTITY = 2;
