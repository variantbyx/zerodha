import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import HomePage from "./landing_page/home/HomePage";
import AboutPage from "./landing_page/about/AboutPage";
import ProductsPage from "./landing_page/products/ProductsPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import NotFound from "./landing_page/NotFound";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Helper that returns a safe React element or a visible error message
const safeElement = (Comp) => {
  if (typeof Comp === "function" || typeof Comp === "string") {
    return <Comp />;
  }
  return (
    <div style={{ padding: 24, color: "#900" }}>
      <h2>Import/render error</h2>
      <p>
        One of the route components failed to import or is not a valid React
        component.
      </p>
    </div>
  );
};

// Simple pathname-based router
const path = window.location ? window.location.pathname : "/";
const routeMap = {
  "/": HomePage,
  "/about": AboutPage,
  "/products": ProductsPage,
  "/pricing": PricingPage,
  "/support": SupportPage,
};
const RouteComponent = routeMap[path] || NotFound;

root.render(
  <div>
    <Navbar />
    <div style={{ padding: 24 }}>{safeElement(RouteComponent)}</div>
    <Footer />
  </div>,
);
