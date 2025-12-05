import { getDelayedData } from "@/lib/DAL/dal";
import Link from "next/link";

export default async function Page() {
  await getDelayedData();
  return (
    <div className="container text-center">
      <h1 className="text-2xl font-bold mb-4">Long Blocker with Fallback</h1>
      <p>This content is rendered after a delay, with a loading fallback.</p>
      <div className="mt-8">
        <Link href="/">
          <button type="button">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}