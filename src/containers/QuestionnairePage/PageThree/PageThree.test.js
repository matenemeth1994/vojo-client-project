import React from "react";
import PageThree from "./PageThree";
import { render } from "@testing-library/react";

describe("Questionnaire PageThree tests", () => {
  it("should render", () => {
    expect(render(<PageThree />)).toBeTruthy();
  });
});
