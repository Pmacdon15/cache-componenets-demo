import { Suspense } from "react";
import CachedContent from "@/components/cached-content";
import DynamicContent from "@/components/dynamic-content";

export default function Page() {
  return (
    <>
      <p>
        Here we can load the static shell of the page while the dynamic content
        loads{" "}
      </p>
      <div className="flex">
        <h1>Content with fallback: </h1>
        <Suspense
          fallback={
            <h1 className="text-red-500">
              We can show a fallback while the content loads{" "}
            </h1>
          }
        >
          <DynamicContent />
        </Suspense>
      </div>
      <div className="flex">
        <h1>Content with-out fallback: </h1>
        <Suspense>
          <DynamicContent />
        </Suspense>
      </div>
      <div className="flex">
        <h1>Cached content: </h1>
      <Suspense>
        <CachedContent />
      </Suspense>
      </div>
    </>
  );
}
