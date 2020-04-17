import React from "react";
import Routes from "./Routes";
import { render } from "@testing-library/react";
describe("Routes tests", () => {
  it("should render", () => {
    expect(render(<Routes />)).toBeTruthy();
  });
});
