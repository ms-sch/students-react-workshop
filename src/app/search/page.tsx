import { NoResults } from "./components/NoResults";
import { PersonCard } from "./components/PersonCard";
import { Person } from "./types/Person";

export const metadata = {
  title: "Search",
};

async function getPeople() {
  const people = await fetch("https://swapi.dev/api/people/");

  return people.json();
}

export default async function Search() {
  const { results } = await getPeople();
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center mb-20 text-white">
        Star Wars People:
      </h1>
      {results.length !== 0 ? (
        <ul className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 px-4 ">
          {results.map((person: Person) => (
            <li key={person.name}>
              <PersonCard person={person} />
            </li>
          ))}
        </ul>
      ) : (
        <NoResults />
      )}
    </div>
  );
}
