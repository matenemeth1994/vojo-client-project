import React from "react";
import PageOne from "./PageOne";
import { render } from "@testing-library/react";

describe("Questionnaire PageOne tests", () => {
  it("should render", () => {
    expect(render(<PageOne />)).toBeTruthy();
  });
});
