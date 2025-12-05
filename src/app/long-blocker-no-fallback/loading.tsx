import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans">
      <div className="container text-center">
        <h1 className="text-4xl font-bold mb-4">Component Caching Tests</h1>
        <p className="mb-8">
          This project demonstrates the differences between various component caching strategies in Next.js.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href={"/long-blocker-no-fallback"}>
            <button type="button">
              Long Blocker (No Fallback)
            </button>
          </Link>
          <Link href={"/long-blocker-fallback"}>
            <button type="button">
              Long Blocker (With Fallback)
            </button>
          </Link>
          <Link href={"/long-blocker-ppr-load"}>
            <button type="button">
              PPR Load
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
