import React from "react";
import NoSampleBox from "./NoSampleBox";
import { render } from "@testing-library/react";

describe("NoSampleBox tests", () => {
  it("should render", () => {
    expect(render(<NoSampleBox />)).toBeTruthy();
  });
});
