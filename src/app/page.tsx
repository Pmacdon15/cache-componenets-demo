import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <p>
        This is to test cached components with ppr vs a long blocker(with out /
        with ) fallback
      </p>
      <div className="flex gap-2 border  p-8">
        <Link href={"/long-block-no-fallback"}>
          <button className="border rounded-sm p-2" type="button">
            Click for long blocker no fallback
          </button>
        </Link>
        <Link href={"/long-blocker-fallback"}>
          <button className="border rounded-sm p-2" type="button">
            Click for long blocker no fallback
          </button>
        </Link>
        <Link href={"/ppr-load"}>
          <button className="border rounded-sm p-2" type="button">
            Click for PPR load
          </button>
        </Link>
      </div>
    </div>
  );
}
