import React from "react";

class HeadLines extends React.Component {
  render() {
    const title = this.props.title;
    const description = this.props.description;
    return (
      <section className="headlines">
        <h1>{title}</h1>
        <h2>{description}</h2>
      </section>
    );
  }
}

export default HeadLines;
