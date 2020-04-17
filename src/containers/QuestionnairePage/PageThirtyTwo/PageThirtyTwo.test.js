import React from "react";
import PageThirtyTwo from "./PageThirtyTwo";
import { render } from "@testing-library/react";

describe("Questionnaire PageThirtyTwo tests", () => {
  it("should render", () => {
    expect(render(<PageThirtyTwo />)).toBeTruthy();
  });
});
