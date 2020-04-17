import React from "react";
import PageEight from "./PageEight";
import { render } from "@testing-library/react";

describe("Questionnaire PageEight tests", () => {
  it("should render", () => {
    expect(render(<PageEight />)).toBeTruthy();
  });
});
