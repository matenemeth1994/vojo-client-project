import React from "react";
import Button from "../../components/Button";
import DashboardNotPaid from "./DashboardNotPaid";
import { shallow } from "enzyme";

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

describe("DashboardNotPaid tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<DashboardNotPaid userData={testFile} />);
  });

  it("should render a button component", () => {
    expect(component.find(Button).length).toEqual(3);
  });
});
