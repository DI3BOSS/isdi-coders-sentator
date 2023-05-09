import Button from "./Button";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

describe("Given the Button component", () => {
  describe("When it receives the text 'RANDOM", () => {
    test("Then it should render a button with the text 'RANDOM'", () => {
      const buttonAction = vi.fn();
      const buttonText = "RANDOM";

      render(<Button actionOnClick={buttonAction} text={buttonText} />);

      const expectedButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
