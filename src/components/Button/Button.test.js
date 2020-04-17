import React from "react";
import Button from "./Button";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";

describe("Button tests", () => {
  let testFunc;
  let component;

  beforeEach(() => {
    testFunc = jest.fn();
    component = shallow(<Button btnText="testText" handleClick={testFunc} />);
  });

  it("should render", () => {
    expect(render(component)).toBeTruthy();
  });

  it("should render the correct text", () => {
    expect(component.text()).toContain("testText");
  });

  it("should call a parent function when clicked", () => {
    component.find("button").simulate("click");
    expect(testFunc).toHaveBeenCalled();
  });

  it("should call a parent function every time it has been clicked", () => {
    component.find("button").simulate("click");
    component.find("button").simulate("click");
    component.find("button").simulate("click");
    expect(testFunc).toHaveBeenCalledTimes(3);
  });
});
