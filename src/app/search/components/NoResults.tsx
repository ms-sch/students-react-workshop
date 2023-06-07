import * as React from "react";
import Image from "next/image";
import NoResultsImage from "public/assets/no-results.png";

export const NoResults = () => {
  return (
    <div>
      <Image src={NoResultsImage} alt="No results" width={250} height={300} />
      <p className="text-2xl font-medium text-center mt-5 text-white">
        Sorry! No results
      </p>
    </div>
  );
};
