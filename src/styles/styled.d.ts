import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      light: string;
      dark: string;
      contrast: string;
      white: string;
      black: string;
    };

    fonts: {
      mainFont: string;
      titleFont: string;
    };

    fontSize: {
      mainFont: string;
      titleFont: string;
    };
  }
}
