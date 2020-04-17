import React from "react";
import RegisterDNA from "./RegisterDNA";
import { mount } from "enzyme";
import Button from "../../components/Button";
import InputField from "../../components/InputField";

describe("RegisterDNA tests", () => {
  let component;

  beforeEach(() => {
    component = mount(<RegisterDNA />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });

  it("should render a button component", () => {
    expect(component.find(Button).length).toEqual(3);
  });

  it("should render an input field component", () => {
    expect(component.find(InputField).length).toEqual(1);
  });
});
