import React from "react";
import { render } from "@testing-library/react";
import NavBar from "./NavBar";

const exampleLinks = [
  "Priorities",
  "Nutrients",
  "Diet",
  "Health",
  "Genetics",
  "Answers",
  "Settings"
];

describe("NavBar tests", () => {
  it("should render", () => {
    expect(render(<NavBar links={exampleLinks} />)).toBeTruthy();
  });
});
