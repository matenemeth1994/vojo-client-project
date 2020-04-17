import React from "react";
import CheckBox from "./CheckBox";
import { render } from "@testing-library/react";
describe("CheckBox tests", () => {
  it("should render", () => {
    expect(render(<CheckBox />)).toBeTruthy();
  });
});
