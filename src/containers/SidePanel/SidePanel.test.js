import React from "react";
import SidePanel from "./SidePanel";
import { render } from "@testing-library/react";
import mockData from "../../data"


describe("SidePanel tests", () => {
  it("should render", () => {
    expect(render(<SidePanel
      displayStyle={"green"}
      handleClick={console.log()}
      nutrient={mockData.nutrients[0]} />)).toBeTruthy();
  });
});
