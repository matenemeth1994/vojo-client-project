import React from "react";
import PageTwentyThree from "./PageTwentyThree";
import { render } from "@testing-library/react";

describe("Questionnaire PageTwentyOne tests", () => {
  it("should render", () => {
    expect(render(<PageTwentyThree />)).toBeTruthy();
  });
});
