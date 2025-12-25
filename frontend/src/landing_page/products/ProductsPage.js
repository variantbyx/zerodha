import React from "react";
import Hero from "./Hero";
import LetfSection from "./LetfSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <div className="container mt-5">
      <h2>Products</h2>
      <div className="row">
        <div className="col-6">
          <LetfSection />
        </div>
        <div className="col-6">
          <RightSection />
        </div>
      </div>
      <div className="row mt-5">
        <Universe />
      </div>
    </div>
  );
}

export default ProductsPage;
