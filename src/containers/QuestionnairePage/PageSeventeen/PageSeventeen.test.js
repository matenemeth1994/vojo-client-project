import React from "react";
import PageSeventeen from "./PageSeventeen";
import { render } from "@testing-library/react";

describe("Questionnaire PageSeventeen tests", () => {
  it("should render", () => {
    expect(render(<PageSeventeen />)).toBeTruthy();
  });
});
