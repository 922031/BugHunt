import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="title">BugHunt</h1>
      <Link href="/Question" className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded">
        start
      </Link>
    </div>
  );
}
