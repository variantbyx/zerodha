import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";

import OpenAccount from "../OpenAccount";

function HomePage() {
  return (
    <React.Fragment>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </React.Fragment>
  );
}

export default HomePage;
