import React, { Component } from "react";

import { default as Input, FormInputProps } from "./FormInput"
import { default as Select } from "./Select"

export class FormInput extends Component<FormInputProps> {
  static Select = Select;

  render() {
    return <Input {...this.props} />;
  }
}
