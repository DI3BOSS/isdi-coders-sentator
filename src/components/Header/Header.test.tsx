import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { vi } from "vitest";
import theme from "../../styles/theme";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a button with the text 'RANDOM'", () => {
      const shuffle = vi.fn();
      const buttonText = "RANDOM";

      render(
        <ThemeProvider theme={theme}>
          <Header shuffle={shuffle} />
        </ThemeProvider>
      );

      const expectedButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
