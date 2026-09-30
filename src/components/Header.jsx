import React from "react";

function Header({ cartCount = 0 }) {
  return (
    <header className="bg-white shadow-sm border-bottom">
      <div className="container py-3">
        <div className="d-flex justify-content-between align-items-center">
          
          <div>
            <h2 className="mb-0">E-Commerce Dashboard</h2>
            <small className="text-muted">
              Manage your products and orders
            </small>
          </div>

          <div className="text-end">
            <span className="badge bg-primary">
              Cart: {cartCount}
            </span>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;