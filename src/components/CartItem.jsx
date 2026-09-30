import React from "react";
import { formatPrice } from "../utils/helpers";

function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="row align-items-center">

          <div className="col-md-5">
            <h5 className="mb-1">{item.name}</h5>
            <p className="text-muted mb-0">
              {formatPrice(item.price)} each
            </p>
          </div>

          <div className="col-md-3">
            <div className="d-flex align-items-center gap-2">
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={() => onDecrease(item.id)}
              >
                −
              </button>

              <span className="fw-bold">
                {item.quantity}
              </span>

              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={() => onIncrease(item.id)}
              >
                +
              </button>
            </div>
          </div>

          <div className="col-md-2">
            <strong>
              {formatPrice(item.price * item.quantity)}
            </strong>
          </div>

          <div className="col-md-2 text-end">
            <button
              className="btn btn-danger btn-sm"
              onClick={() => onRemove(item.id)}
            >
              Remove
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CartItem;