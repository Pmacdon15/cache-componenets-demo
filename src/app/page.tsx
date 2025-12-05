import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans">
      <div className="container text-center">
        <h1 className="text-4xl font-bold mb-4">Cache Component Tests</h1>
        <p className="mb-8">
          This project demonstrates the differences between various component
          rendering strategies in Next.js 16^
        </p>
        <div className="flex flex-col gap-4 justify-center md:flex-row">
          <Link
            href={"/long-blocker-no-fallback"}
            className="w-full md:w-auto text-center"
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <button type="button">Long Blocker (No Fallback)</button>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  Because cacheComponents requires dynamic data be wrapped in
                  suspense a fallback identical to this page will be shown.
                </p>
              </TooltipContent>
            </Tooltip>
          </Link>
          <Link
            href={"/long-blocker-fallback"}
            className="w-full md:w-auto text-center"
          >
            <button type="button">Long Blocker (With Fallback)</button>
          </Link>
          <Link
            href={"/long-blocker-ppr-load"}
            className="w-full md:w-auto text-center"
          >
            <button type="button">PPR Load</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
