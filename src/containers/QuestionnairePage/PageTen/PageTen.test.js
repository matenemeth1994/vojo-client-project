import React from "react";
import PageTen from "./PageTen";
import { render } from "@testing-library/react";

describe("Questionnaire PageTen tests", () => {
  it("should render", () => {
    expect(render(<PageTen />)).toBeTruthy();
  });
});
