import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center space-y-6 h-[50vh]">
        <h1 className="text-7xl font-bold">IMAGINE A PLACE...</h1>
        <p className="max-w-2xl mx-auto font-medium text-gray-300">
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>

        <Button borderRadius="0.5rem" className="px-6 py-3">
          <Link href="/signup">Try Unicord</Link>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
