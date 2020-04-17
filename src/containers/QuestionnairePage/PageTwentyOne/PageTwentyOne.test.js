import React from "react";
import PageTwentyOne from "./PageTwentyOne";
import { render } from "@testing-library/react";

describe("Questionnaire PageTwentyOne tests", () => {
  it("should render", () => {
    expect(render(<PageTwentyOne />)).toBeTruthy();
  });
});
