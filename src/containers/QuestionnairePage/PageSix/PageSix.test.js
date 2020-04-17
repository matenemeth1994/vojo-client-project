import React from "react";
import PageSix from "./PageSix";
import { render } from "@testing-library/react";

describe("Questionnaire PageSix tests", () => {
  it("should render", () => {
    expect(render(<PageSix />)).toBeTruthy();
  });
});
