import React, { Component } from "react";

import { default as _Gap, Props as _Props } from "./Gap"

type Props = Omit<_Props, "direction">

class VerticalGap extends Component<Props> {
  render() {
    return <_Gap {...this.props} direction="vertical" />
  }
}

class HorizontalGap extends Component<Props> {
  render() {
    return <_Gap {...this.props} direction="horizontal" />
  }
}

export class Gap  {
  static Vertical = VerticalGap
  static Horizontal = HorizontalGap
}
