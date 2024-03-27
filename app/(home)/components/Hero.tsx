import { Button } from "@/components/ui/button-acer";
import Link from "next/link";
import React from "react";

import InviteImage from "@/public/images/invite-unicord.svg";
import HangingImage from "@/public/images/hanging-unicord.svg";
import ReliableImage from "@/public/images/reliable-unicord.svg";
import Image from "next/image";
import { Spotlight } from "@/components/ui/spotlight";

const Hero = () => {
  return (
    <div>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      {/* LANDING SECTION */}
      <div className="flex flex-col items-center justify-center text-center space-y-6 min-h-[50vh]">
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold">
          IMAGINE A PLACE...
        </h1>
        <p className="max-w-2xl mx-auto font-medium text-gray-300 px-4 text-sm md:text-base">
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Button borderRadius="0.5rem" className="px-3 sm:px-6 py-2 sm:py-3">
            <Link href="/signup">Why Unicord</Link>
          </Button>
          <Button borderRadius="0.5rem" className="px-3 sm:px-6 py-2 sm:py-3">
            <Link href="/signup">Try Unicord</Link>
          </Button>
        </div>
      </div>

      {/* INVITE SECTION */}
      <div className="flex lg:flex-row flex-col items-center justify-between min-h-[40vh]">
        <Image
          src={InviteImage}
          alt="invite-image"
          height={300}
          width={300}
          className="lg:h-[550px] lg:w-[550px] h-[80%] w-[80%]"
        />
        <div className="flex flex-col lg:items-center space-y-3 lg:max-w-md lg:mx-auto px-4">
          <h1 className="text-3xl lg:text-5xl font-extrabold">
            Create an invite-only place where you belong
          </h1>
          <p className="lg:text-xl text-base text-gray-300">
            Unicord servers are organized into topic-based channels where you
            can collaborate, share, and just talk about your day without
            clogging up a group chat.
          </p>
        </div>
      </div>

      {/* HANGING OUT SECTION */}
      <div className="flex lg:flex-row flex-col-reverse items-center min-h-[40vh] mt-32 md:mt-20">
        <div className="flex flex-col lg:items-center space-y-3 lg:max-w-md lg:mx-auto px-4">
          <h1 className="text-3xl lg:text-5xl font-extrabold">
            From few to a fandom
          </h1>
          <p className="lg:text-xl text-base text-gray-300">
            Get any community running with moderation tools and custom member
            access. Give members special powers, set up private channels, and
            more.
          </p>
        </div>
        <Image
          src={HangingImage}
          alt="invite-image"
          height={300}
          width={300}
          className="lg:h-[550px] lg:w-[550px] h-[80%] w-[80%]"
        />
      </div>

      {/* RELIABLE TECH */}
      <div className="text-center space-y-4 mt-32 flex flex-col items-center">
        <h1 className="text-4xl lg:text-6xl font-bold">
          RELIABLE TECH FOR STAYING CLOSE
        </h1>
        <p className="lg:max-w-4xl mx-auto text-base lg:text-lg text-gray-300 px-4">
          Low-latency voice and video feels like you&apos;re in the same room.
          Wave hello over video, watch friends stream their games, or gather up
          and have a drawing session with screen share.
        </p>

        <Image
          src={ReliableImage}
          alt="reliable-tech"
          height={200}
          width={200}
          className="w-[80%] h-[80%]"
        />
      </div>

      {/* READY TO START YOUR JOURNEY QUESTION */}
      <div className="flex items-center justify-center text-center flex-col space-y-6 px-4">
        <h1 className="text-2xl md:text-4xl font-medium mt-10">
          Ready to start your journey ?
        </h1>
        <Button borderRadius="0.5rem" className="px-3 sm:px-6 py-2 sm:py-3">
          <Link href="/signup">Try Unicord</Link>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
