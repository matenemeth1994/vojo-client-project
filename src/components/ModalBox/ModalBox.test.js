import React from "react";
import ModalBox from "./ModalBox";
import { render } from "@testing-library/react";

describe("ModalBox tests", () => {
  it("should render", () => {
    expect(render(<ModalBox />)).toBeTruthy();
  });
});
