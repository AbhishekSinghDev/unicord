import { UserButton } from "@clerk/nextjs";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full sm:ml-20 sm:mr-10 flex justify-between items-center pt-5 h-12 px-4 max-w-screen-2xl mx-auto sm:px-5 antialiased">
      <h1 className="text-2xl sm:text-3xl font-bold cursor-pointer">Unicord</h1>
      <UserButton />
    </nav>
  );
};

export default Navbar;
