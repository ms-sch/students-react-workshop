import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <p>This is awsome page </p>
        <Link href="/search">Search</Link>
      </div>
    </main>
  );
}
