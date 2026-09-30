import React from "react";

function Home() {
  return (
    <div className="text-center py-5">

      <h1>Welcome to E-Commerce Dashboard</h1>

      <p className="lead mt-3">
        Manage products, shopping cart, and checkout from one place.
      </p>

      <div className="row mt-5 g-4">

        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h4>📦 Products</h4>
              <p>
                Browse and manage available products.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h4>🛒 Shopping Cart</h4>
              <p>
                Add products and manage quantities.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h4>💳 Checkout</h4>
              <p>
                Complete your order using the checkout form.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Home;