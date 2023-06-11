import YodaGif from "public/assets/sleeping-yoda.gif";
import Image from "next/image";

export const metadata = {
  title: "Star Wars search",
};

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center mb-5 text-white ">
        This is your home page!
      </h1>
      <div className="overflow-hidden	rounded-full border-8 border-indigo-900">
        <Image src={YodaGif} alt="Yoda" width={400} height={300} />
      </div>
    </div>
  );
}
