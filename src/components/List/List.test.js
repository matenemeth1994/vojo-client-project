import React from "react";
import List from "./List";
import { render } from "@testing-library/react";

describe("List tests", () => {
  const list = [
    "Foods High in Magnesium:",
    "Almonds (dry roasted): 80 mg per 30g handful",
    "Spinach (boiled): 7,820 mg per 1/2 cup",
    "Cashews: 74 mg per 30g handful",
    "Peanuts: 63mg per 30g handful",
    "Soy milk: 61 mg per cup",
    "Black beans (cooked): 60 mg per 1/2 cup",
    "Peanut butter: 49 mg per 2 tbsp",
    "Bread (whole wheat): 46 mg per 2 slices",
    "Avocado: 44 mg per avocado",
    "Potato: 43 mg per medium potato",
    "Rice (brown, cooked): 42 mg per 1/2 cup"
  ];
  it("should render", () => {
    expect(render(<List listItems={list} />)).toBeTruthy();
  });
});
