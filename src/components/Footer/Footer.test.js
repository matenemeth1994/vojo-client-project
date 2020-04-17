import React from "react";
import Footer from "./Footer";
import { render } from "@testing-library/react";

describe("Footer tests", () => {
  it("should render", () => {
    expect(render(<Footer />)).toBeTruthy();
  });
});
