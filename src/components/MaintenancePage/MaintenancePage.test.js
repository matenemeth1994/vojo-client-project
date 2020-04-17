import React from "react";
import MaintenancePage from "./MaintenancePage";
import { render } from "@testing-library/react";

describe("MaintenancePage tests", () => {
  it("should render", () => {
    expect(render(<MaintenancePage />)).toBeTruthy();
  })
});
