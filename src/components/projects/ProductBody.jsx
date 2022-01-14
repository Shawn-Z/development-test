import React from "react";
import ProductDescription from "./ProductDescription";
import ProductRating from "./ProductRating";
import Arrow from "./Arrow";
import Button from "./Button";

class ProductBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products,
      selectedData: [],
    };

    this.onItemCheck = this.onItemCheck.bind(this);
  }

  onItemCheck(e, item) {
    let productList = this.state.products;
    productList.map((product) => {
      if (product.title === item.title) {
        product.selected = true;
      } else {
        product.selected = false;
      }

      return product;
    });
    this.setState({
      products: productList,
      selectedData: this.state.products.filter((e) => e.selected),
    });
  }
  render() {
    this.state.products = this.props.products;
    const products = this.state.products;
    return (
      <>
        {products && (
          <div>
            <div className="products">
              {products.map((product, index) => (
                <div
                  key={index}
                  onClick={(e) => this.onItemCheck(e, product)}
                  className={
                    "productSection " + (product.selected ? "selected" : "")
                  }
                >
                  <section className="left">
                    <div>
                      <img
                        className="productsImg"
                        src={product.image}
                        alt="product"
                        width="200"
                        height="500"
                      ></img>
                    </div>
                    <h2 className="productTitle">{product.title}</h2>
                    <Arrow className="arrows" isReverse={product.selected} />
                  </section>
                  <section className="right">
                    <h3 className="priceSize">{"$" + product.price}</h3>
                    <ProductDescription
                      className="descriptionSize"
                      productDescription={product.description}
                    />
                    <ProductRating rating={product.rating} />
                    <div className="cartHolder">
                      {" "}
                      <Button text="Add to Cart"></Button>{" "}
                    </div>
                  </section>
                </div>
              ))}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default ProductBody;
