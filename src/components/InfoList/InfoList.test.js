import React from "react";
import InfoList from "./InfoList";
import { render } from "@testing-library/react";

describe("InfoList tests", () => {
  it("should render", () => {
    expect(render(<InfoList />)).toBeTruthy();
  });
});
