import React from "react";
import PageFifteen from "./PageFifteen";
import { render } from "@testing-library/react";

describe("Questionnaire PageFifteen tests", () => {
  it("should render", () => {
    expect(render(<PageFifteen />)).toBeTruthy();
  });
});
