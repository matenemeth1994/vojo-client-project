import React from "react";
import DietType from "./DietType";
import { render } from "@testing-library/react";
 
describe("DietType tests", () => {
  it("should render", () => {
    expect(render(<DietType />)).toBeTruthy();
  });
});
