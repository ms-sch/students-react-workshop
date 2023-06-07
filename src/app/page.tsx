import Link from "next/link";
import YodaGif from "public/assets/sleeping-yoda.gif";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <h1 className="text-4xl font-semibold text-center mb-5 text-white ">
          This is your home page!
        </h1>
        <div className="overflow-hidden	rounded-full border-8 border-indigo-900">
          <Image src={YodaGif} alt="Yoda" />
        </div>
      </div>
    </main>
  );
}
