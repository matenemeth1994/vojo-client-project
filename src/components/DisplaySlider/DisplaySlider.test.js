import React from "react";
import { render } from "@testing-library/react";
import DisplaySlider from "./DisplaySlider";

describe("DisplaySlider tests", () => {
  it("should render", () => {
    expect(render(<DisplaySlider />)).toBeTruthy();
  });
});
