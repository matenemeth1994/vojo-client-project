import React from "react";
import EverydayFoods from "./EverydayFoods";
import { render } from "@testing-library/react";

describe("EverydayFoods tests", () => {
  it("should render", () => {
    expect(render(<EverydayFoods everydayFoods={[]} />)).toBeTruthy();
  });
});
