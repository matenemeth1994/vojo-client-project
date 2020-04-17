import React from "react";
import PriorityBox from "./PriorityBox";
import { render } from "@testing-library/react";

describe("PriorityBox tests", () => {
  it("should render", () => {
    expect(
      render(
        <PriorityBox
          priorityBoxNum={"1"}
          priorityBoxHeading={"Food"}
          priorityBoxText={"The box's text"}
          priorityBoxLink={"/under-construction-page"}
          priorityBoxLinkText={"The text for the link"}
        />
      )
    ).toBeTruthy();
  });
});
