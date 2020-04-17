import React from "react";
import RadioButton from "./RadioButton";
import { render } from "@testing-library/react";

describe("Radio Button tests", () => {
  it("should render", () => {
    expect(
      render(
        <RadioButton
          text="Vegan"
          question="vegan"
          value="isVegan"
          startChecked={true}
          selectRadio={input => setFormValues({ ...formValues, isVegan: true })}
        />
      )
    ).toBeTruthy();
  });
});
