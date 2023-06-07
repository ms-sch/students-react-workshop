"use client";
import { useState } from "react";

type Photo = {
  id: string;
  url: string;
  alt: string;
};

export default function Search() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    fetch(`/api/search/?query=${encodeURIComponent(query)}`)
      .then((response) => response.json())
      .then((results) => {
        setLoading(false);
        setPhotos(
          results.data.results.map((item: any) => ({
            id: item.id,
            url: item.urls.regular,
            alt: item.alt_description,
          }))
        );
      });
  };

  return (
    <main>
      <div>
        <p>This is search</p>
        <a href="/">Go to home</a>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>

        {loading ? (
          <p>Loading...</p>
        ) : (
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
        )}
      </div>
    </main>
  );
}
