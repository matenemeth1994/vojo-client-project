import React from "react";
import { render } from "@testing-library/react";
import mockData from "../../data";
import DietBreakdown from "./DietBreakdown";

describe("DietBreakdown tests", () => {
  it("should render", () => {
    expect(render(<DietBreakdown userApiData={mockData} />)).toBeTruthy();
  });
});
