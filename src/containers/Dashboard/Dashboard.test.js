import React from "react";
import Dashboard from "./Dashboard";
import { render } from "enzyme";

const testFile = {
  questionnaireAnswers: {
    firstName: "Test"
  },
  priorityActions: [
    {
      action: "Eat at least 2 portions of leafy greens every day",
      description:
        "Think kale, spinach, watercress - if it’s green and leafy, you’re on the right track.",
      name: "action-1"
    },
    {
      action: "Supplement 250 mg of algal oil every day",
      description: "We always recommend Testa. Order Yours Now.",
      name: "action-2"
    },
    {
      action: "Ditch the vegetable oil",
      description: "Use a good quality olive oil instead.",
      name: "action-3"
    }
  ],
  userApiData: {
    "user-dashboard": {
      "diet-type": {
        "go-to-breakfast": "overnight oats",
        "guilty-pleasure": "bread",
        name: "Vegan Farmer",
        oil: "olive",
        "plant-milk": "soy"
      },
      "first-name": "Jo",
      "vegan-health-score": "87",
      "vegan-health-score-message": "Lookin’ good!"
    }
  }
};

describe("Dashboard tests", () => {
  it("should render", () => {
    expect(render(<Dashboard userData={testFile} />)).toBeTruthy();
  });
});
