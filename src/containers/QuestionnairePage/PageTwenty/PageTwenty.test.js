import React from "react";
import PageTwenty from "./PageTwenty";
import { render } from "@testing-library/react";

describe("Questionnaire PageTwenty tests", () => {
  it("should render", () => {
    expect(render(<PageTwenty />)).toBeTruthy();
  });
});
