import React from "react";
import ProductCard from "./ProductCard";
import { PRODUCTS } from "../utils/mockData";

function ProductList({ onAddToCart }) {
  return (
    <div className="row g-4">

      {PRODUCTS.map((product) => (
        <div
          className="col-12 col-sm-6 col-lg-4 col-xl-3"
          key={product.id}
        >
          <ProductCard
            product={product}
            onAddToCart={onAddToCart}
          />
        </div>
      ))}

    </div>
  );
}

export default ProductList;