"use client";
import { useEffect, useState } from "react";

type Person = {
  name: string;
};
export default function Search() {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    console.log("bbb");
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((results) => {
        setPeople(results.results);
      });
  }, []);
  return (
    <main>
      <div>
        <p>This is search</p>
        <a href="/">Got to home</a>

        <h1>Star Wars:</h1>
        <ul>
          {people.map((person: Person) => (
            <li key={person.name}>{person.name}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
