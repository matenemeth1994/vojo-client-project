import React from "react";
import PageFour from "./PageFour";
import { render } from "@testing-library/react";

describe("Questionnaire PageFour tests", () => {
  it("should render", () => {
    expect(render(<PageFour />)).toBeTruthy();
  });
});
