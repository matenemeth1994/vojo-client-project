import React from "react";
import PageTwentyFive from "./PageTwentyFive";
import { render } from "@testing-library/react";

describe("Questionnaire PageTwentyFive tests", () => {
  it("should render", () => {
    expect(render(<PageTwentyFive />)).toBeTruthy();
  });
});
