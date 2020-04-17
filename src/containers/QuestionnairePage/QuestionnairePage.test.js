import React from "react";
import QuestionnairePage from "./QuestionnairePage";
import { render } from "@testing-library/react";

describe("Questionnaire QuestionnairePage tests", () => {
  it("should render", () => {
    expect(render(<QuestionnairePage />)).toBeTruthy();
  });
});
