import React from "react";
import { formatPrice, getStarRating } from "../utils/helpers";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="card h-100 shadow-sm">

      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
        style={{
          height: "180px",
          objectFit: "cover"
        }}
      />

      <div className="card-body d-flex flex-column">

        <h5 className="card-title">
          {product.name}
        </h5>

        <p className="text-muted mb-1">
          {product.category}
        </p>

        <p className="mb-2">
          {getStarRating(product.rating)}
        </p>

        <p className="card-text">
          {product.description}
        </p>

        <h5 className="mt-auto">
          {formatPrice(product.price)}
        </h5>

        {product.inStock ? (
          <button
            className="btn btn-primary mt-2"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        ) : (
          <button
            className="btn btn-secondary mt-2"
            disabled
          >
            Out of Stock
          </button>
        )}

      </div>
    </div>
  );
}

export default ProductCard;