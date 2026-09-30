import React from "react";
import ProductList from "../components/ProductList";

function Products({ onAddToCart }) {
  return (
    <div>
      <h1 className="mb-2">Products</h1>

      <p className="text-muted mb-4">
        Browse our available products
      </p>

      <ProductList onAddToCart={onAddToCart} />
    </div>
  );
}

export default Products;