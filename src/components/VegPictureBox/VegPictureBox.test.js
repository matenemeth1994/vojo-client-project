import React from "react";
import VegPictureBox from "./VegPictureBox";
import { render } from "@testing-library/react";

describe("VegPictureBox", () => {
  it("should render", () => {
    expect(render(<VegPictureBox />)).toBeTruthy();
  });
});
