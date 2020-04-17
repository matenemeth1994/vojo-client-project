import React from "react";
import PageFourteen from "./PageFourteen";
import { render } from "@testing-library/react";

describe("Questionnaire PageFourteen tests", () => {
  it("should render", () => {
    expect(render(<PageFourteen />)).toBeTruthy();
  });
});
