import React from "react";
import { render } from "@testing-library/react";
import Slider from "./Slider";

describe("Slider tests", () => {
  it("should render", () => {
    expect(render(<Slider />)).toBeTruthy();
  });
});
