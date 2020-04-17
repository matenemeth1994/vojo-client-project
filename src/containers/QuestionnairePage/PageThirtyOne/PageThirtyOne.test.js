import React from "react";
import PageThirtyOne from "./PageThirtyOne";
import { render } from "@testing-library/react";

describe("Questionnaire PageThirtyOne tests", () => {
  it("should render", () => {
    expect(render(<PageThirtyOne />)).toBeTruthy();
  });
});
