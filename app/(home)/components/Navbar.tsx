import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const links = [
    { name: "Features", link: "/" },
    { name: "Support", link: "/" },
    { name: "About", link: "/" },
    { name: "Pricing", link: "/" },
  ];

  return (
    <nav className="w-full flex justify-between items-center mt-5 h-12 px-4">
      <h1 className="text-2xl sm:text-3xl font-bold cursor-pointer">Unicord</h1>
      <ul className="items-center justify-center gap-4 hidden md:flex">
        {links.map((link, index) => (
          <li key={index} className="hover:scale-110 transition-all">
            <Link href={link.link} className="font-medium text-lg">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <Button borderRadius="0.5rem" className="px-3 sm:px-6 py-2">
        Login
      </Button>
    </nav>
  );
};

export default Navbar;
