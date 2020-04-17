import React from "react";
import PageSeven from "./PageSeven";
import { render } from "@testing-library/react";

describe("Questionnaire PageSeven tests", () => {
  it("should render", () => {
    expect(render(<PageSeven />)).toBeTruthy();
  });
});
