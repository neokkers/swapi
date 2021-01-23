const spaces = {
  xs: "0.5rem",
  s: "0.9rem",
  m: "1.5rem",
  l: "2rem",
  xl: "3rem",
  auto: "auto",
};
const sizes = {
  xs: "50px",
  s: "100px",
  m: "150px",
  l: "200px",
  xl: "300px",
  auto: "500px",
  iconM: "40px",
  iconL: "60px",
  iconXL: "80px",
  textS: "0.7rem",
  textM: "1rem",
  textL: "1.2rem",
  textXL: "1.4rem",
  textTitle1: "2rem",
  textXXL: "2.5rem",
  text3XL: "4.5rem",
  textLHS: "1",
  textLHM: "1.3",
  textLHL: "1.5",
  gap2XS: "0.25rem",
  gapXS: "0.75rem",
  gapS: "1rem",
  gapM: "1.5rem",
  gapL: "2rem",
  gapXL: "2.5rem",
  gapPageList: "4rem",
  iconSizeS: "20px",
  iconSizeM: "30px",
  iconSizeL: "50px",
  gridGapS: "1rem",
  gridGapM: "2rem",
  gridGapL: "4rem",
  gridGapXL: "6rem",
  mainPadding: "1rem",
  borderRadius: "5px",
  containerWidthLaptop: "1200px",
};

sizes.defaults = {
  text: sizes.textM,
  textLH: sizes.textLHM,
  gap: sizes.gapM,
  iconSize: sizes.iconSizeM,
  gridGap: sizes.gridGapS,
};

const utils = {
  fontFamily: `'Montserrat', sans-serif`,

  boxShadow:
    "0px 5px 5px -3px rgba(0,0,0,0.05), 0px 8px 10px 1px rgba(0,0,0,0.02), 0px 3px 14px 2px rgba(0,0,0,0.02)",
};

export const lightTheme = { name: "light", spaces, sizes, utils };
export const darkTheme = { name: "dark", spaces, sizes, utils };

lightTheme.colors = {
  primary: "#444",
  accent: "#12ABC4",
  secondary: "#999",
  bgPrimary: "#fff",
  bgGray: "#eee",
  bgSecondary: "#fff",
  borderColor: "#eee",
  danger: "#FF6347",
  white: "#fff",
};
darkTheme.colors = {
  primary: "white",
  accent: "#ff6821",
  secondary: "#999",
  bgPrimary: "#222",
  bgGray: "#555",
  bgSecondary: "#555",
  borderColor: "#111",
  danger: "blue",
};

export const mainTheme = {
  colors: {
    primary: "#444",
    accent: "#12ABC4",
    secondary: "#999",
    bgPrimary: "#fff",
    bgGray: "#eee",
    bgSecondary: "#fff",
    borderColor: "#eee",
    danger: "#FF6347",
    white: "#fff",
  },
  spaces: {
    xs: "0.5rem",
    s: "0.9rem",
    m: "1.5rem",
    l: "2rem",
    xl: "3rem",
    auto: "auto",
  },
  sizes: {
    xs: "50px",
    s: "100px",
    m: "150px",
    l: "200px",
    xl: "300px",
    auto: "500px",
    iconM: "40px",
    textS: "0.7rem",
    textM: "1rem",
    textL: "1.2rem",
    textXL: "1.5rem",
    textLHS: "1",
    textLHM: "1.3",
    textLHL: "1.5",
    iconSizeM: "30px",
  },
  utils: {
    fontFamily: '"Raleway", sans-serif',
    borderRadius: "5px",
    boxShadow:
      "0px 5px 5px -3px rgba(0,0,0,0.05), 0px 8px 10px 1px rgba(0,0,0,0.02), 0px 3px 14px 2px rgba(0,0,0,0.02)",
  },
};
