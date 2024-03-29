"use client";
import Link from "next/link";
import { Package2, PlusIcon, Settings } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useRootDashboard } from "@/components/context/root-dashboard-context";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const RootSideBar = () => {
  const { servers } = useRootDashboard();
  const handleClick = () => {
    console.log("handle it");
  };
  return (
    <>
      {" "}
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 py-4">
          <Link
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Unicord</span>
          </Link>
          {servers &&
            servers.map((server) => (
              <div key={server._id}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={handleClick}
                        className="flex h-9 w-9 items-center justify-center rounded-lg  hover:text-foreground md:h-8 md:w-8"
                      >
                        {server?.uploadcare_image_id ? (
                          <Image
                            alt={server.name}
                            src={server.uploadcare_image_id}
                            width={1000}
                            height={1000}
                            className="w-5 h-5"
                          />
                        ) : null}
                        <span className="sr-only">{server.name}</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right">{server.name}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            ))}
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="outline"
                  className="primary flex h-9 w-9 items-center justify-center rounded-lg  hover:text-foreground md:h-8 md:w-8"
                >
                  <PlusIcon className="h-5 w-5" />
                  <span className="sr-only">Create</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">New Server</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="outline"
                  className="flex h-9 w-9 items-center justify-center rounded-lg  hover:text-foreground md:h-8 md:w-8"
                >
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="sm:max-w-xs" side="left">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  className=" text-center p-1 flex w-fit h-fit rounded-md   items-center justify-center   bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                  href="/"
                >
                  <h1 className="text-2xl sm:text-3xl font-bold cursor-pointer">
                    Unicord
                  </h1>

                  <span className="sr-only">Unicord</span>
                </Link>
                {servers &&
                  servers.map((server) => (
                    <div key={server._id}>
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={handleClick}
                        className="flex h-9 w-9 items-center justify-center rounded-lg  hover:text-foreground md:h-8 md:w-8"
                      >
                        {server?.uploadcare_image_id ? (
                          <Image
                            alt={server.name}
                            src={server.uploadcare_image_id}
                            width={1000}
                            height={1000}
                            className="w-5 h-5"
                          />
                        ) : null}
                        <span className="sr-only">{server.name}</span>
                      </Button>
                    </div>
                  ))}
              </nav>
            </SheetContent>
          </Sheet>
        </header>
      </div>
    </>
  );
};
export default RootSideBar;
