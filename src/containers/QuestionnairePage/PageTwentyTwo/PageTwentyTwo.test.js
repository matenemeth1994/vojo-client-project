import React from "react";
import PageTwentyTwo from "./PageTwentyTwo";
import { render } from "@testing-library/react";

describe("Questionnaire PageTwentyOneTwo tests", () => {
  it("should render", () => {
    expect(render(<PageTwentyTwo />)).toBeTruthy();
  });
});
