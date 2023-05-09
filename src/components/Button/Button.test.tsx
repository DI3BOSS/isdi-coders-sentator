import Button from "./Button";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { vi } from "vitest";
import theme from "../../styles/theme";

describe("Given the Button component", () => {
  describe("When it receives the text 'RANDOM", () => {
    test("Then it should render a button with the text 'RANDOM'", () => {
      const buttonAction = vi.fn();
      const buttonText = "RANDOM";

      render(
        <ThemeProvider theme={theme}>
          <Button actionOnClick={buttonAction} text={buttonText} />
        </ThemeProvider>
      );

      const expectedButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
