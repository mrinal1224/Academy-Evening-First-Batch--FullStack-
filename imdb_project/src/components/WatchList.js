import React, { useState, useEffect } from "react";

function WatchList() {
  const [favourites, setFavourites] = useState([]);
  const [genres, setGenres] = useState([]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  let genreids = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("imdb");

    moviesFromLocalStorage = JSON.parse(moviesFromLocalStorage);

    setFavourites(moviesFromLocalStorage);
  }, []);

  useEffect(() => {
    let temp = favourites.map((movie) => genreids[movie.genre_ids[0]]);
    temp = new Set(temp); // imp
    setGenres(["All Genres", ...temp]);
  });

  let filteredArray = [];

  // genre Filter

  filteredArray =
    currGenre == "All Genres"
      ? favourites
      : favourites.filter((movie) => genreids[movie.genre_ids[0]]==currGenre);

  return (
    <>
      <div className="mt-6 flex space-x-2 justify-center">
        {genres.map((genre) => {
          return (
            <button
              className={
                currGenre == genre
                  ? "m-2 text-lg p-1 px-2 bg-blue-400 text-white rounded-xl font-bold"
                  : "m-2 text-lg p-1 px-2 bg-gray-400 hover:bg-blue-400 text-white rounded-xl font-bold"
              }

              onClick={()=>{
                setCurrGenre(genre)
              }}
            >
              {genre}
            </button>
          );
        })}
      </div>

      <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table class='w-full border-collapse bg-white text-left text-sm text-gray-500"'>
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-4 font-medium text-gray-900">Name</th>

              <th>
                <div className="flex">
                  <div>Ratings</div>
                </div>
              </th>

              <th>
                <div className="flex">
                  <div>Popularity</div>
                </div>
              </th>

              <th>
                <div className="flex">
                  <div>Genre</div>
                </div>
              </th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-100 border-t border-gray-100">
            {filteredArray.map((movie) => {
              return (
                <tr class="hover:bg-gray-50">
                  <td class="flex items-center px-6 py-4 font-normal text-gray-900 space-x-2">
                    <img
                      class="h-[6rem]  w-[10rem] object-fit"
                      src={`https://image.tmdb.org/t/p/original/t/p/original/${movie.poster_path}`}
                    />

                    <div class="font-medium text-gray-700  text-sm">
                      {movie.title}
                    </div>
                  </td>

                  <td className=" pl-6 py-4">{movie.vote_average}</td>

                  <td className="pl-6 py-4">{movie.popularity}</td>

                  <td className="py-4">{genreids[movie.genre_ids[0]]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
