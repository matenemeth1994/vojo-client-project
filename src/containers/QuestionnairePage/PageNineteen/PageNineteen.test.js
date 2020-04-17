import React from "react";
import PageNineteen from "./PageNineteen";
import { render } from "@testing-library/react";

describe("Questionnaire PageNineteen tests", () => {
  it("should render", () => {
    expect(render(<PageNineteen />)).toBeTruthy();
  });
});
