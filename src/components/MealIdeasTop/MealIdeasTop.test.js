import React from "react";
import MealIdeasTop from "./MealIdeasTop";
import { render } from "@testing-library/react";

describe("MealIdeasTop test", () => {
  it("should render", () => {
    expect(render(<MealIdeasTop />)).toBeTruthy();
  });
});
