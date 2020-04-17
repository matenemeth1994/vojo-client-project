import React from "react";
import PageNine from "./PageNine";
import { render } from "@testing-library/react";

describe("Questionnaire PageNine tests", () => {
  it("should render", () => {
    expect(render(<PageNine />)).toBeTruthy();
  });
});
