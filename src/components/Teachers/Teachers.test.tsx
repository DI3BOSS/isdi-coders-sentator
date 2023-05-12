import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import { render, screen } from "@testing-library/react";
import Teachers from "./Teachers";

describe("Given the Teachers component", () => {
  describe("When it receives an array of two teachers names, 'diego-bermudez' and 'mario-gonzales", () => {
    test("Then it should show two images with the alt text 'teacher diego bermudez' and 'mario-gonzales", () => {
      const mockTeachers = ["diego-bermudez", "mario-gonzales"];
      const mockAltTextDiego = "teacher diego bermudez";
      const mockAltTextMario = "teacher mario gonzales";

      render(
        <ThemeProvider theme={theme}>
          <Teachers teachers={mockTeachers} />
        </ThemeProvider>
      );

      const expectedAlTextDiego = screen.getByAltText(mockAltTextDiego);
      const expectedAlTextMario = screen.getByAltText(mockAltTextMario);

      expect(expectedAlTextDiego).toBeInTheDocument();
      expect(expectedAlTextMario).toBeInTheDocument();
    });
  });
});
