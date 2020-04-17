import React from "react";
import NutrientsInfo from "./NutrientsInfo";
import { render } from "@testing-library/react";
import mockData from "../../data";

describe("NutrientsInfo tests", () => {
  it("should render", () => {
    expect(
      render(
        <NutrientsInfo
          nutrient={mockData.nutrients[0]}
          displayStyle={"green"}
        />
      )
    ).toBeTruthy();
  });
});
