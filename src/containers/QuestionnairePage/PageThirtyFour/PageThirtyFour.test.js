import React from "react";
import PageThirtyFour from "./PageThirtyFour";
import { render } from "@testing-library/react";

describe("Questionnaire PageThirtyFour tests", () => {
  it("should render", () => {
    expect(render(<PageThirtyFour />)).toBeTruthy();
  });
});
