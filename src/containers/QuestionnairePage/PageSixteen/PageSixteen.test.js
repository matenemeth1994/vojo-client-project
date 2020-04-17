import React from "react";
import PageSixteen from "./PageSixteen";
import { render } from "@testing-library/react";

describe("Questionnaire PageSixteen tests", () => {
  it("should render", () => {
    expect(render(<PageSixteen />)).toBeTruthy();
  });
});
