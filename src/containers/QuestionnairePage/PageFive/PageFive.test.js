import React from "react";
import PageFive from "./PageFive";
import { render } from "@testing-library/react";

describe("Questionnaire PageFive tests", () => {
  it("should render", () => {
    expect(render(<PageFive />)).toBeTruthy();
  });
});
