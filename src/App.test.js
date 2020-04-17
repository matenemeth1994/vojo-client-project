import React from "react";
import { shallow } from "enzyme";
import App from "./App.jsx";

describe("App tests", () => {
  it("renders app", () => {
    expect(shallow(<App />)).toBeTruthy();
  });
});
