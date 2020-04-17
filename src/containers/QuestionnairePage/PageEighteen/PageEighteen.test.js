import React from "react";
import PageEighteen from "./PageEighteen";
import { render } from "@testing-library/react";

describe("Questionnaire PageEighteen tests", () => {
  it("should render", () => {
    expect(render(<PageEighteen />)).toBeTruthy();
  });
});
