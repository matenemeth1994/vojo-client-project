import React from "react";
import PrioritiesPage from "./PrioritiesPage";
import { render } from "@testing-library/react";

const userData = {
  priorityActions: [],
  geneticGuid: ""
};

describe("PrioritiesPage tests", () => {
  it("should render", () => {
    expect(
      render(
        <PrioritiesPage
          userData={userData}
          geneticGuid={userData.geneticGuid}
        />
      )
    ).toBeTruthy();
  });
});
