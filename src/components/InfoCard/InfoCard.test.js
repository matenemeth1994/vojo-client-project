import React from "react";
import InfoCard from "./InfoCard";
import { render } from "@testing-library/react";
import mockData from "../../data";

describe("InfoCard tests", () => {
  it("should render", () => {
    expect(
      render(
        <InfoCard
          nutrient={mockData.nutrients[0]}
          displayPanel={console.log()}
        />
      )
    ).toBeTruthy();
  });
});
