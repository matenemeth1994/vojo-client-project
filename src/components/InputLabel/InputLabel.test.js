import React from "react";
import InputLabel from "./InputLabel";
import { render } from "@testing-library/react";

describe("InputLabel tests", () => {
  it("should render", () => {
    expect(render(<InputLabel />)).toBeTruthy();
  });
});
