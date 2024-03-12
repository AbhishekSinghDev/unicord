import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const page = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
    </div>
  );
};

export default page;
