type Photo = {
  id: string;
  url: string;
  alt: string;
};

export default async function Search({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const query = searchParams?.query ? `${searchParams.query}` : undefined;

  const photos = await getPhotos(query);

  return (
    <main>
      <div>
        <p>This is search</p>
        <a href="/">Go to home</a>

        <form action="/search" method="GET">
          <input type="text" name="query" placeholder="Search" />
          <button type="submit">Submit</button>
        </form>

        {photos ? (
          <>
            <h1>Photos:</h1>
            {photos.length > 0 ? (
              <ul>
                {photos.map((photo) => (
                  <li key={photo.id}>
                    <img src={photo.url} alt={photo.alt} />
                  </li>
                ))}
              </ul>
            ) : (
              <p>No photos found.</p>
            )}
          </>
        ) : null}
      </div>
    </main>
  );
}

async function getPhotos(query?: string): Promise<Photo[] | undefined> {
  if (!query) {
    return undefined;
  }
  const res = await fetch(
    `https://api.unsplash.com/search/photos/?query=${encodeURIComponent(
      query
    )}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );
  const data = await res.json();

  return data.results.map((item: any) => ({
    id: item.id,
    url: item.urls.regular,
    alt: item.alt_description,
  }));
}
