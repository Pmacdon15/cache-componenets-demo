import Link from "next/link";
import { getDelayedData } from "@/lib/DAL/dal";

export default async function Page() {
  await getDelayedData();
  return (
    <div className="container text-center">
      <h1 className="text-2xl font-bold mb-4">Long Blocker without Fallback</h1>
      <p>
        This content is rendered after a delay, but without a loading fallback.
      </p>
      <div className="mt-8">
        <Link href="/" className="w-full md:w-auto">
          <button type="button">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}
