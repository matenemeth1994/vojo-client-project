import React from "react";
import MealIdeasBottom from "./MealIdeasBottom";
import { render } from "@testing-library/react";

describe("MealIdeasBottom test", () => {
  it("should render", () => {
    expect(render(<MealIdeasBottom />)).toBeTruthy();
  });
});
