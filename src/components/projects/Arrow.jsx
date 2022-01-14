import React from "react";
import { ReactComponent as LeftArrow } from "../../assets/leftArrow.svg";
import { ReactComponent as RightArrow } from "../../assets/rightArrow.svg";

class Arrow extends React.Component {
  render() {
    const isReverse = this.props.isReverse;
    return <div>{isReverse ? <RightArrow /> : <LeftArrow />}</div>;
  }
}

export default Arrow;
