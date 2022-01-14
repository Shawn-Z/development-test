import React from "react";

class ProductRating extends React.Component {
  render() {
    const rating = this.props.rating;
    const ratingPercentage = Math.round(rating.rate * 1) * 20;
    return (
      <div className="productRating">
        {rating.rate}
        <div
          className="stars"
          rating={ratingPercentage}
          aria-label="Rating of this product"
        />
        ({rating.count})
      </div>
    );
  }
}

export default ProductRating;
