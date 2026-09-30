import React from "react";
import CartComponent from "../components/Cart";

function Cart({
  cart,
  onIncrease,
  onDecrease,
  onRemove
}) {
  return (
    <div>
      <CartComponent
        cart={cart}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onRemove={onRemove}
      />
    </div>
  );
}

export default Cart;