import React, { Component } from "react";

import { default as _Button, ButtonProps } from "./Button"
import { ButtonVariant } from "./ButtonVariant"

class OverBG extends Component<ButtonProps> {
  render() {
    return <_Button {...this.props} variant={ButtonVariant.OverBG}/>;
  }
}

class PrimaryButton extends Component<ButtonProps> {
  render() {
    return <_Button {...this.props} variant={ButtonVariant.Primary}/>;
  }
}

class DangerButton extends Component<ButtonProps> {
  render() {
    return <_Button {...this.props} variant={ButtonVariant.Danger}/>;
  }
}

export class Button extends Component<ButtonProps> {
  static OverBG = OverBG
  static Primary = PrimaryButton
  static Danger = DangerButton

  render() {
    return <_Button {...this.props}/>;
  }
}
