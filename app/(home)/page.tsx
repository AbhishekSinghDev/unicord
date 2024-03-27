import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const page = () => {
  const { userId } = auth();

  if (userId) redirect("/dashboard");

  return (
    <div className="bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      <div className="max-w-7xl mx-auto sm:px-5 px-1 antialiased">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </div>
  );
};

export default page;
