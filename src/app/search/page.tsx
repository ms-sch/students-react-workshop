export const metadata = {
  title: "Search",
};

async function getPeople() {
  // Write function to fetch people from the Star Wars API "https://swapi.dev/api/people/"
}

export default async function Search() {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center mb-20 text-white">
        Star Wars People:
      </h1>
      {/*Show result of getPeople() here*/}
    </div>
  );
}
