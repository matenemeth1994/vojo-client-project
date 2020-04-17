import React from "react";
import PageTwentyFour from "./PageTwentyFour";
import { render } from "@testing-library/react";

describe("Questionnaire PageTwentyFour tests", () => {
  it("should render", () => {
    expect(render(<PageTwentyFour />)).toBeTruthy();
  });
});
