import React from "react";
import MealIdeas from "./MealIdeas";
import { render } from "@testing-library/react";

describe("MealIdeas test", () => {
  it("should render", () => {
    expect(render(<MealIdeas />)).toBeTruthy();
  });
});
