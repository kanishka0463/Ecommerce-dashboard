import React from "react";
import CartItem from "./CartItem";
import { calculateTotal, formatPrice } from "../utils/helpers";

function Cart({
  cart,
  onIncrease,
  onDecrease,
  onRemove
}) {
  const total = calculateTotal(cart);

  if (cart.length === 0) {
    return (
      <div className="text-center py-5">
        <h2>Your Cart is Empty</h2>
        <p className="text-muted">
          Add some products to your cart to continue.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="mb-4">Shopping Cart</h2>

      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          onRemove={onRemove}
        />
      ))}

      <div className="card mt-4">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="mb-0">Total</h4>

            <h4 className="mb-0 text-primary">
              {formatPrice(total)}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;