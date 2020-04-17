import React from "react";
import PageThirty from "./PageThirty";
import { render } from "@testing-library/react";

describe("Questionnaire PageThirty tests", () => {
  it("should render", () => {
    expect(render(<PageThirty />)).toBeTruthy();
  });
});
