import React from "react";
import PageTwo from "./PageTwo";
import { render } from "@testing-library/react";

describe("Questionnaire PageTwo tests", () => {
  it("should render", () => {
    expect(render(<PageTwo />)).toBeTruthy();
  });
});
