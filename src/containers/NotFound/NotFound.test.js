import React from "react";
import NotFound from "./NotFound";
import { render } from "@testing-library/react";

describe("NotFound tests", () => {
  it("should render", () => {
    expect(render(<NotFound/>)).toBeTruthy();
  });
});


