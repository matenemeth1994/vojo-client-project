import React from "react";
import PageThirteen from "./PageThirteen";
import { render } from "@testing-library/react";

describe("Questionnaire PageThirteen tests", () => {
  it("should render", () => {
    expect(render(<PageThirteen />)).toBeTruthy();
  });
});
