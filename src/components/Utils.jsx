import React from "react";

const Utils = {
  numbers: (config) => {
    const { count, min, max } = config;

    const numbers = [30, 45, 25];

    return numbers;
  },
  CHART_COLORS: {
    blue: "#0091E6",
    green: "#17EA76",
    gray: "#E4E6EF",
  },
};

export default Utils;
