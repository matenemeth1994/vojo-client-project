import React from "react";
import DietVeg from "./DietVeg";
import { render } from "@testing-library/react";

describe("DietVeg tests", () => {
  it("should render", () => {
    expect(render(<DietVeg />)).toBeTruthy();
  });
});
