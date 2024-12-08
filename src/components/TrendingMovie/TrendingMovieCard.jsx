import React from "react";
import { Link } from "react-router-dom";

const TrendingMovieCard = ({ movie }) => {
  const {
    _id,
    moviePoster,
    movieTitle,
    genre,
    duration,
    releaseYear,
    rating,
    summary,
    authorEmail,
  } = movie;
  return (
    <div className="rounded-lg overflow-hidden shadow-lg dark:bg-gray-900 bg-gray-600 text-white dark:text-white relative ">
      <img
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="w-full h-52 object-cover rounded-t-lg"
        src={moviePoster}
        alt={movieTitle}
      />
      <div data-aos="fade-up" data-aos-duration="1000" className="p-4">
        <h2 className="font-bold text-2xl mb-2">{movieTitle}</h2>
        <div className="mb-4 ">
          <p className="text-sm text-gray-400 mb-1">
            <span className="font-semibold text-gray-300">Genre:</span> {genre}
          </p>
          <p className="text-sm text-gray-400 mb-1">
            <span className="font-semibold text-gray-300">Duration:</span>{" "}
            {duration} minutes
          </p>
          <p className="text-sm text-gray-400 mb-1">
            <span className="font-semibold text-gray-300">Release Year:</span>{" "}
            {releaseYear}
          </p>
          <p className="text-sm text-gray-400 mb-1">
            <span className="font-semibold text-gray-300">Rating:</span> ⭐{" "}
            {rating}/5
          </p>
          <p className="text-sm text-gray-300 line-clamp-3 mb-4 ">{summary}</p>
        </div>
        <div>
          <Link to={`/movies/${_id}`}>
            <button
              // onClick={() => handleMovieDetails(_id)}
              className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition  "
            >
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrendingMovieCard;
