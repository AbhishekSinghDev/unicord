import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { BackgroundBeams } from "@/components/ui/background-beams";

const page = () => {
  return (
    <div className="max-w-7xl mx-auto sm:px-5 px-1 antialiased">
      <Navbar />
      <Hero />
      <Footer />
      <BackgroundBeams />
    </div>
  );
};

export default page;
