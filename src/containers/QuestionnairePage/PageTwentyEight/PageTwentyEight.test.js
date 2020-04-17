import React from "react";
import PageTwentyEight from "./PageTwentyEight";
import { render } from "@testing-library/react";

describe("Questionnaire PageTwentyEight tests", () => {
  it("should render", () => {
    expect(render(<PageTwentyEight />)).toBeTruthy();
  });
});
