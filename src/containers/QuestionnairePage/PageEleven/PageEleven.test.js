import React from "react";
import PageEleven from "./PageEleven";
import { render } from "@testing-library/react";

describe("Questionnaire PageEleven tests", () => {
  it("should render", () => {
    expect(render(<PageEleven />)).toBeTruthy();
  });
});
