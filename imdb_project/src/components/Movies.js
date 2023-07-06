import React, { useEffect , useState } from "react";

import axios from "axios";

function Movies() {

  const [movies , setMovies] = useState([])

  useEffect(()=>{

    (function(){
      axios
      .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=ed9945885ba0c6f7a7edc57b379191ae`)
      .then((res) => {
        setMovies(res.data.results)
        console.log(res.data.results)
       
      });
    })()

  } , [])


 

  return (
    <div>
      <div className="text-2xl mb-8 font-bold text-center">Trending Movies</div>

      <div className="flex flex-wrap">

        {movies.map((movie)=>{
          return <div
          className="w-[200px] h-[35vh] bg-center bg-cover rounded-xl m-4 md:h[40vh] md:w[200px] hover:scale-110 duration-300 relative flex items-end"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path})`,
          }}
        >
          <div className="text-white font-bold text-center w-full bg-gray-900 bg-opacity-60">
          {movie.title}
          </div>
        </div>
        })}
        
      </div>
    </div>
  );
}

export default Movies;
