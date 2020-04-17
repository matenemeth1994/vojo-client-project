import React from "react";
import HomePage from "./HomePage";
import { render } from "@testing-library/react";

describe("HomePage tests", () => {
  it("should render", () => {
    expect(render(<HomePage />)).toBeTruthy();
  });
});

