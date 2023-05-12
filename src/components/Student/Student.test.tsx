import { render, screen } from "@testing-library/react";
import Student from "./Student";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";

describe("Given the Student component", () => {
  describe("When it receives the student 'diego-bermudez'", () => {
    test("Then it should show an image with an alt tag that contains the text 'student diego bermudez'", () => {
      const mockStudentName = "diego-bermudez";
      const expectedAltText = "student diego bermudez";

      render(
        <ThemeProvider theme={theme}>
          <Student student={mockStudentName} studentsWithLargerImage={""} />
        </ThemeProvider>
      );

      const renderedAltText = screen.getByAltText(expectedAltText);

      expect(renderedAltText).toBeInTheDocument();
    });
  });
});
