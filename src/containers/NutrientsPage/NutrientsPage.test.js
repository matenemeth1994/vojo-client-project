import React from "react";
import NutrientsPage from "./NutrientsPage";
import { render } from "@testing-library/react";
import mockData from "../../data";

describe("NutrientsPage tests", () => {
  it("should render", () => {
    expect(render(<NutrientsPage nutrients={mockData.nutrients} />)).toBeTruthy();
  });
});


