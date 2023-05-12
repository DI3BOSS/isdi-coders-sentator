import { render, screen } from "@testing-library/react";
import Image from "./Image";

describe("Given the Image component", () => {
  describe("When it receives the student diego bermudez image", () => {
    test("Then it should show an image with an alt tag that contains the text 'student diego bermudez'", () => {
      const mockClassName = "student-images";
      const mockImageSrc = "assets/images/students-photos/di3boss.webp";
      const mockImageAlt = "student diego bermudez";
      render(
        <Image
          className={mockClassName}
          src={mockImageSrc}
          alt={mockImageAlt}
        />
      );

      const renderedAltText = screen.getByAltText(mockImageAlt);

      expect(renderedAltText).toBeInTheDocument();
    });
  });
});
