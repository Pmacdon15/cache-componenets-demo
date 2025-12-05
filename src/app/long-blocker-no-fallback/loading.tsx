import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans">
      <div className="container ">
        <h1 className="text-4xl font-bold mb-4">Cache Component Demo</h1>
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
        <p className="mt-2">
          - The first method is the slowest, it feels like nothing is happening
          when you click it.
        </p>
        <p className="mt-2">
          - The second method is better but the whole page is blocked while the
          data fetches.This compounds if you use several awaits in sequence. Now
          you could improve the second method by loading the data in the child
          components and using suspense and better fallbacks but the navigation
          to the page would feel slower then a route using PPR.
        </p>{" "}
        <p className="mt-2">
          - The third is the best because you can load the static shell of the
          page which feels instance, while allowing all dynamic content to be
          fetch in parallel and data that is not behind auth to can be cached
          across all deployments allowing the data to be there on page load as a
          bonus you can start all your data fetching promise on the page and
          pass them to the children all while keeping the page static and the
          child components accessing the data dynamic.
        </p>
      </div>
    </div>
  );
}
