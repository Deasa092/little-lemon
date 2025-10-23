import React from "react";
import Hero from "./Hero";
import Specials from "./Specials";
import Testimonial from "./Testimonial";
import About from "./About";

function Home() {
  return (
    <main className="container">
      <Hero />
      <Specials />
      <Testimonial />
      <About />
    </main>
  );
}

export default Home;
