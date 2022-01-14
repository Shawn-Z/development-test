import React from "react";

class Button extends React.Component {
  render() {
    const text = this.props.text;
    return <button>{text}</button>;
  }
}

export default Button;
