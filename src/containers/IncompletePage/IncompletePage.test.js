import React from "react";
import IncompletePage from "./IncompletePage";
import { render } from "@testing-library/react";

describe("IncompletePage tests", () => {
  it("should render", () => {
    expect(render(<IncompletePage />)).toBeTruthy();
  });
});
