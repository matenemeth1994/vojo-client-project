import React from "react";
import UnderConstructionPage from "./UnderConstructionPage";
import { render } from "@testing-library/react";

describe(" UnderConstructionPage tests", () => {
  it("should render", () => {
    expect(render(<UnderConstructionPage />)).toBeTruthy();
  });
});
