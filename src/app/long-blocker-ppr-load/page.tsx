import { Suspense } from "react";
import CachedContent from "@/components/cached-content";
import DynamicContent from "@/components/dynamic-content";
import Link from "next/link";

export default function Page() {
  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-4 text-center">PPR Load with Suspense</h1>
      <p className="mb-8 text-center">
        This page demonstrates how Partial Prerendering Cache Components(PPR) works with Suspense to load dynamic content.
      </p>
      <div className="space-y-8">
        <div className="p-4 border border-dashed border-gray-300 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Dynamic content with fallback</h2>
          <Suspense
            fallback={
              <p className="text-blue-500">Loading dynamic content with a fallback...</p>
            }
          >
            <DynamicContent />
          </Suspense>
        </div>
        <div className="p-4 border border-dashed border-gray-300 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Dynamic content without Fallback</h2>
          <Suspense>
            <DynamicContent />
          </Suspense>
        </div>
        <div className="p-4 border border-dashed border-gray-300 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Dynamic cached content</h2>
          <Suspense>
            <CachedContent />
          </Suspense>
        </div>
      </div>
      <div className="mt-8 text-center">
        <Link href="/" className="w-full md:w-auto">
          <button type="button">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}
