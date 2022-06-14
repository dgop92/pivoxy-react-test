export const sizes = {
  laptopL: "860px",
  desktop: "1250px",
};

export const devices = {
  down: {
    laptopL: `(max-width: ${sizes.laptopL})`,
    desktop: `(max-width: ${sizes.desktop})`,
  },
};
