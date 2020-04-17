import React from "react";
import SingleBreakdown from "./SingleBreakdown";
import { render } from "@testing-library/react";

describe("SingleBreakdown tests", () => {
  it("should render", () => {
    expect(render(<SingleBreakdown />)).toBeTruthy();
  });
});

