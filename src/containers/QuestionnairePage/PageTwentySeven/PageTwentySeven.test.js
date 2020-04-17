import React from "react";
import PageTwentySeven from "./PageTwentySeven";
import { render } from "@testing-library/react";

describe("Questionnaire PageTwentySeven tests", () => {
  it("should render", () => {
    expect(render(<PageTwentySeven />)).toBeTruthy();
  });
});
