import { useLazyQuery } from "@apollo/client";
import React, { useState } from "react";
import { GET_MOVIE_BY_NAME } from "../graphql-client/Queries";

export default function SearchMovies() {
  const [movieSearched, setMovieSearched] = useState("");
  const [fetchMovie, { data, error }] = useLazyQuery(GET_MOVIE_BY_NAME);

  const onChangeSearch = (event) => {
    setMovieSearched(event.target.value);
  };

  const onClickData = () => {
    fetchMovie({
      variables: {
        name: movieSearched,
      },
    });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Interstellar..."
        onChange={onChangeSearch}
      />
      <button onClick={onClickData}>Fetch Data</button>
      <div>
        {data && (
          <div>
            <p>Movie Name: {data.movie.name}</p>
            <p>Year Of Publication: {data.movie.yearOfPublication}</p>
          </div>
        )}
        {error && <p>There was an error fetching the data</p>}
      </div>
    </div>
  );
}
