import React from "react";
import LandingPage from "./LandingPage";
import { render } from "@testing-library/react";

describe("LandingPage tests", () => {
  it("should render", () => {
    expect(render(<LandingPage />)).toBeTruthy();
  });
});
