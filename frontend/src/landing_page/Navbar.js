import React from "react";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        <a className="navbar-brand" href="#">
          <img
            src="media/images/logo.svg"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="d-flex ms-auto" role="search">
            <ul className="navbar-nav mb-lg-0 d-flex align-items-center">
              <li className="nav-item">
                <a
                  className="nav-link active px-3"
                  aria-current="page"
                  href="#"
                >
                  Signup
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active px-3" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active px-3" href="#">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active px-3" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active px-3" href="#">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
