import React from "react";
import ProductBody from "./ProductBody";
import Headlines from "./HeadLines";
import { useState, useEffect } from "react";

const ProductPage = React.forwardRef((props, ref) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getData();
    async function getData() {
      const response = await fetch("https://fakestoreapi.com/products?limit=5");
      const data = await response.json();
      setProducts(data);
    }
  }, []);

  return (
    <main className="container">
      <Headlines
        title="Heading"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
                    architecto neque illum eius error, totam mollitia reiciendis officiis quis
                    magnam?
                    "
      />
      <section className="productPage">
        <ProductBody ref={ref} products={products} />
      </section>
    </main>
  );
});

export default ProductPage;
