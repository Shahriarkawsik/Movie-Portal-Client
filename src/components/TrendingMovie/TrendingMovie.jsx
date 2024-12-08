import React, { useEffect, useState } from "react";
import TrendingMovieCard from "./TrendingMovieCard";
import { Link } from "react-router-dom";

const TrendingMovie = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/trendingMovie`)
      .then((res) => res.json())
      .then((data) => setMovies(data.data));
  }, []);
  // console.log(movies);
  return (
    <div className="w-11/12 lg:w-9/12 mx-auto my-10 space-y-10">
      <h1 className="text-4xl font-JosefinSans text-center font-semibold">
        Featured Movie
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-5">
        {movies.map((movie, id) => (
          <TrendingMovieCard key={id} movie={movie}></TrendingMovieCard>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Link to={"/movies"}>
          <button className="dark:bg-red-700 border rounded-full p-3 bg-gray-600 text-xl font-bold text-white">
            See all movies
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TrendingMovie;
