import React from "react";
import VegPersonBox from "./VegPersonBox";
import { render } from "@testing-library/react";

describe("VegPersonBox tests", () => {
  it("should render", () => {
    expect(render(<VegPersonBox />)).toBeTruthy();
  });
});
