import React from "react";
import PageTwentySix from "./PageTwentySix";
import { render } from "@testing-library/react";

describe("Questionnaire PageTwentySix tests", () => {
  it("should render", () => {
    expect(render(<PageTwentySix />)).toBeTruthy();
  });
});
