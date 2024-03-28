import { Button } from "@/components/ui/button";
import {
  PopoverTrigger,
  PopoverContent,
  Popover,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Component() {
  return (
    <div className="h-screen grid min-h-screen lg:grid-cols-[240px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full flex-col gap-2">
          <div className="flex h-12 items-center border-b px-4">
            <Button className="rounded-full" size="icon" variant="ghost">
              <TwitterIcon className="w-6 h-6" />
              <span className="sr-only">Toggle server menu</span>
            </Button>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className="rounded-full"
                  id="server-popover"
                  size="icon"
                  variant="ghost"
                >
                  <img
                    alt="Avatar"
                    className="rounded-full"
                    height="32"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width="32"
                  />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent
                align="end"
                className="w-56 mt-2"
                id="server-popover"
              >
                <div>Home</div>
                <div />
                <div>Profile</div>
                <div>Privacy & Safety</div>
                <div />
                <div>Log Out</div>
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <div className="grid gap-2">
              <Button className="rounded-none w-full text-left" variant="ghost">
                <TwitterIcon className="w-4 h-4" />
                <span className="font-medium">Announcements</span>
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  2
                </Badge>
              </Button>
              <Button className="rounded-none w-full text-left" variant="ghost">
                <TwitterIcon className="w-4 h-4" />
                <span className="font-medium">General</span>
              </Button>
              <Button className="rounded-none w-full text-left" variant="ghost">
                <TwitterIcon className="w-4 h-4" />
                <span className="font-medium">Random</span>
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-500">
                  5
                </Badge>
              </Button>
              <Button
                className="rounded-none w-full text-left bg-gray-100"
                variant="ghost"
              >
                <TwitterIcon className="w-4 h-4" />
                <span className="font-medium">Music</span>
              </Button>
              <Button className="rounded-none w-full text-left" variant="ghost">
                <TwitterIcon className="w-4 h-4" />
                <span className="font-medium">Gaming</span>
              </Button>
              <Button className="rounded-none w-full text-left" variant="ghost">
                <TwitterIcon className="w-4 h-4" />
                <span className="font-medium">Support</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-12 items-center gap-4 border-b bg-gray-100/40 px-4 dark:bg-gray-800/40">
          <div className="flex items-center gap-2">
            <Button className="rounded-full" size="icon" variant="ghost">
              <TwitterIcon className="w-6 h-6" />
              <span className="sr-only">Toggle server menu</span>
            </Button>
            <h2 className="font-semibold">Announcements</h2>
          </div>
          <form className="flex-1">
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                className="w-full bg-white shadow-none appearance-none pl-8 md:w-[200px] lg:w-[300px] dark:bg-gray-950"
                placeholder="Search"
                type="search"
              />
            </div>
          </form>
          <Button className="rounded-full" size="icon" variant="ghost">
            <VideoIcon className="w-6 h-6" />
            <span className="sr-only">Toggle video call</span>
          </Button>
          <Button className="rounded-full" size="icon" variant="ghost">
            <PhoneIcon className="w-6 h-6" />
            <span className="sr-only">Toggle voice call</span>
          </Button>
          <Button className="rounded-full" size="icon" variant="ghost">
            <SearchIcon className="w-6 h-6" />
            <span className="sr-only">Search</span>
          </Button>
        </header>
        <main className="flex-1 flex flex-col p-4 gap-4">
          <div className="flex items-start gap-4">
            <img
              alt="Avatar"
              className="rounded-full"
              height="40"
              src="/placeholder.svg"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width="40"
            />
            <div className="flex-1 grid gap-1 text-sm">
              <div className="flex items-center gap-1 text-base font-medium">
                <span>John Doe</span>
                <span className="text-xs font-normal text-gray-500 dark:text-gray-400">
                  2:32 PM
                </span>
              </div>
              <div className="leading-tight">
                <p className="text-sm">
                  Hey everyone! We have an important meeting tomorrow at 10 AM.
                  Don&apos;t forget to join!
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <img
              alt="Avatar"
              className="rounded-full"
              height="40"
              src="/placeholder.svg"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width="40"
            />
            <div className="flex-1 grid gap-1 text-sm">
              <div className="flex items-center gap-1 text-base font-medium">
                <span>Jane Smith</span>
                <span className="text-xs font-normal text-gray-500 dark:text-gray-400">
                  2:35 PM
                </span>
              </div>
              <div className="leading-tight">
                <p className="text-sm">
                  Thanks for the heads up! Looking forward to it. 👍
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <img
              alt="Avatar"
              className="rounded-full"
              height="40"
              src="/placeholder.svg"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width="40"
            />
            <div className="flex-1 grid gap-1 text-sm">
              <div className="flex items-center gap-1 text-base font-medium">
                <span>Mike Johnson</span>
                <span className="text-xs font-normal text-gray-500 dark:text-gray-400">
                  2:40 PM
                </span>
              </div>
              <div className="leading-tight">
                <p className="text-sm">
                  Is this the meeting where we discuss the new project?
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <img
              alt="Avatar"
              className="rounded-full"
              height="40"
              src="/placeholder.svg"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width="40"
            />
            <div className="flex-1 grid gap-1 text-sm">
              <div className="flex items-center gap-1 text-base font-medium">
                <span>Alice Brown</span>
                <span className="text-xs font-normal text-gray-500 dark:text-gray-400">
                  2:45 PM
                </span>
              </div>
              <div className="leading-tight">
                <p className="text-sm">
                  Yes, that&apos;s correct. We&apos;ll be going over the details of the
                  new project and assigning tasks.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <img
              alt="Avatar"
              className="rounded-full"
              height="40"
              src="/placeholder.svg"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width="40"
            />
            <div className="flex-1 grid gap-1 text-sm">
              <div className="flex items-center gap-1 text-base font-medium">
                <span>Emily Wilson</span>
                <span className="text-xs font-normal text-gray-500 dark:text-gray-400">
                  2:50 PM
                </span>
              </div>
              <div className="leading-tight">
                <p className="text-sm">
                  I won&apos;t be able to make it to the meeting tomorrow. Can
                  someone fill me in later?
                </p>
              </div>
            </div>
          </div>
        </main>
        <div className="border-t">
          <form className="flex items-center h-12 px-4">
            <Button className="rounded-full" size="icon" variant="ghost">
              <SmileIcon className="w-6 h-6" />
              <span className="sr-only">Toggle emoji picker</span>
            </Button>
            <Button className="rounded-full" size="icon" variant="ghost">
              <PaperclipIcon className="w-6 h-6" />
              <span className="sr-only">Attach file</span>
            </Button>
            <Button
              className="rounded-full ml-auto"
              size="icon"
              variant="ghost"
            >
              <SendIcon className="w-6 h-6" />
              <span className="sr-only">Send message</span>
            </Button>
            <Textarea
              className="flex-1 min-h-[0] resize-none shadow-none"
              placeholder="Message #announcements"
              rows={1}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

function PaperclipIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  );
}

function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function SendIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function SmileIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function VideoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 8-6 4 6 4V8Z" />
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    </svg>
  );
}
