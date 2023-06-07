"use client";
import { useCallback } from "react";
import { useEffect, useState } from "react";
import { NoResults } from "./components/NoResults";
import { Person, PersonCard } from "./components/PersonCard";

export default function Search() {
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  async function getPeople() {
    const people = await fetch("https://swapi.dev/api/people/");
    return people.json();
  }

  useEffect(() => {
    setLoading(true);

    (async () => {
      const { results } = await getPeople();
      setPeople(results);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <main>
        <div className="flex items-center justify-center h-screen">
          <p className="text-2xl font-semibold text-white">Loading...</p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div>
        <h1 className="text-4xl font-semibold text-center mb-20 text-white">
          Star Wars People:
        </h1>
        {people.length !== 0 ? (
          <ul className="grid grid-cols-4 gap-10 px-4">
            {people.map((person: Person) => (
              <li key={person.name}>
                <PersonCard person={person} />
              </li>
            ))}
          </ul>
        ) : (
          <NoResults />
        )}
      </div>
    </main>
  );
}
