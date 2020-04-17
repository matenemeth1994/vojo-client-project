import React from "react";
import PageTwelve from "./PageTwelve";
import { render } from "@testing-library/react";

describe("Questionnaire PageTwelve tests", () => {
  it("should render", () => {
    expect(render(<PageTwelve />)).toBeTruthy();
  });
});
