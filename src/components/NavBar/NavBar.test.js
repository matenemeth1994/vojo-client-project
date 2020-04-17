import React from "react";
import NavBar from "./NavBar";
import { render } from "@testing-library/react";

describe("NavBar tests", () => {
  it("should render", () => {
    expect(
      render(
        <NavBar signOut={"signOut"}/>
      )
    ).toBeTruthy();
  });
});
