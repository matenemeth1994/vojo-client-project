import React from "react";
import { render } from "@testing-library/react";
import ProgressBar from "./ProgressBar";

describe("ProgressBar tests", () => {
  const testVal = 50;
  it("should render", () => {
    expect(render(<ProgressBar value={testVal} />)).toBeTruthy();
  })
})
