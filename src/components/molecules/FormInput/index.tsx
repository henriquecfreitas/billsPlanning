import React, { Component } from "react";

import { FormInputProps } from "./FormInput.props";
import { default as Input } from "./FormInput"
import { default as Select } from "./Select"

export class FormInput extends Component<FormInputProps> {
  static Select = Select;

  render() {
    return <Input {...this.props} />;
  }
}
