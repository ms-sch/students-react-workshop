import * as React from "react";

export type Person = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
};

export const PersonCard = ({ person }: { person: Person }) => {
  return (
    <div className="bg-slate-300 rounded py-8 px-4 shadow-md">
      <h2 className="text-xl font-semibold text-center">{person.name}</h2>
      <div className="w-full h-px bg-slate-800 mb-2" />
      <p className="font-medium">Height: {person.height}</p>
      <p className="font-medium">Mass: {person.mass}</p>
      <p className="font-medium">Hair color: {person.hair_color}</p>
    </div>
  );
};
