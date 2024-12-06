import React from "react";
import BGImg from "../../assets/image/BG/10.png";
import { data, Link, useNavigate } from "react-router-dom";
import { Alert } from "./../../Alert/Alert";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const FavoriteMovieCard = ({ movie }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    _id,
    moviePoster,
    movieTitle,
    genre,
    duration,
    releaseYear,
    rating,
    summary,
  } = movie;

  const handleDeleteFavorite = (id) => {
    fetch(`http://localhost:3000/favorite/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: user.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.success) {
          Alert(false, data.message);
        } else {
          Alert(true, data.message);
          navigate("/movies");
        }
      });
  };
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-900 text-white relative ">
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
            {rating}/10
          </p>
          <p className="text-sm text-gray-300 line-clamp-3 mb-4 ">{summary}</p>
        </div>
        <div>
          <button
            onClick={() => handleDeleteFavorite(_id)}
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition  "
          >
            Delete Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavoriteMovieCard;
