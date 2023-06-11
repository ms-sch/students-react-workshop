"use client";
import Image from "next/image";
import NoResultsImage from "public/assets/no-results.png";

export default function Error() {
  return (
    <div>
      <Image src={NoResultsImage} alt="No results" width={250} height={300} />
      <p className="text-2xl font-medium text-center mt-5 text-white">
        Sorry! Something went wrong.
      </p>
    </div>
  );
}
