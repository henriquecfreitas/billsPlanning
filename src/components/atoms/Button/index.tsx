import React, { Component } from "react";

import { default as _Button, ButtonProps, ButtonVariant } from "./Button"


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
  static Primary = PrimaryButton
  static Danger = DangerButton

  render() {
    return <_Button {...this.props}/>;
  }
}
