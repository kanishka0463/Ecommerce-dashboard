import React from "react";

function Checkout() {
  return (
    <div>
      <h1 className="mb-4">Checkout</h1>

      <div className="card shadow-sm">
        <div className="card-body">

          <h4 className="mb-4">
            Customer Information
          </h4>

          <form>

            <div className="mb-3">
              <label className="form-label">
                Full Name
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Email
              </label>

              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Phone Number
              </label>

              <input
                type="tel"
                className="form-control"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Address
              </label>

              <textarea
                className="form-control"
                rows="3"
                placeholder="Enter your address"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
            >
              Place Order
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}

export default Checkout;