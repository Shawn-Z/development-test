import React from "react";

class ProductDescription extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const productDescription = this.props.productDescription;
    return <div className="productDescription">{productDescription}</div>;
  }
}

export default ProductDescription;
