import React from "react";
import PageTwentyNine from "./PageTwentyNine";
import { render } from "@testing-library/react";

describe("Questionnaire PageTwentyNine tests", () => {
  it("should render", () => {
    expect(render(<PageTwentyNine />)).toBeTruthy();
  });
});
