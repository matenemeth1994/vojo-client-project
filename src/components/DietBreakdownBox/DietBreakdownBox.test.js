import React from "react";
import DietBreakdownBox from "./DietBreakdownBox";
import { render } from "@testing-library/react";

describe("DietBreakdownBox tests", () => {
  it("should render", () => {
    expect(render(<DietBreakdownBox />)).toBeTruthy();
  });
});
