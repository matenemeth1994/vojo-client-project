import React from "react";
import PageThirtyThree from "./PageThirtyThree";
import { render } from "@testing-library/react";

describe("Questionnaire PageThirtyThree tests", () => {
  it("should render", () => {
    expect(render(<PageThirtyThree />)).toBeTruthy();
  });
});
