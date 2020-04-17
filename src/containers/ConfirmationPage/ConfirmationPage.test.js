import React from "react";
import ConfirmationPage from "./ConfirmationPage";
import { render } from "@testing-library/react";

describe("ConfirmationPage tests", () => {
  it("should render", () => {
    expect(render(<ConfirmationPage />)).toBeTruthy();
  });
});
