import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid gap-8 text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
        <Link
          href="challenge1"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Challenge 1
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none ml-4">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Find the bug!</p>
        </Link>

        <Link
          href="challenge2"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Challenge 2
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none ml-4">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Fetch data from an API!
          </p>
        </Link>

        <Link
          href="/challenge3"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Challenge 3
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none ml-4">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Create a bubble portrait!
          </p>
        </Link>
      </div>
    </main>
  );
}
