import * as React from "react";
import { Person } from "../types/Person";

export const PersonCard = ({ person }: { person: Person }) => {
  return (
    <div className="bg-slate-300 rounded py-8 px-4 shadow-md min-w-max">
      <h2 className="text-xl font-semibold text-center">{person.name}</h2>
      <div className="w-full h-px bg-slate-800 mb-2" />
      <p className="font-medium">Height: {person.height}</p>
      <p className="font-medium">Mass: {person.mass}</p>
      <p className="font-medium">Hair color: {person.hair_color}</p>
    </div>
  );
};
