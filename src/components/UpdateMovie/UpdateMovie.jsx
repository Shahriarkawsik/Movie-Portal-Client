import { Link, useLoaderData, useLocation, useParams } from "react-router-dom";
import BGImg from "../../assets/image/BG/11.png";
import { useContext, useEffect, useState } from "react";
import { Alert } from "./../../Alert/Alert";

import { AuthContext } from "../../Providers/AuthProvider";
import { Rating } from "react-simple-star-rating";

const UpdateMovie = () => {
  const { id } = useParams();
  const { data } = useLoaderData();

  const {
    _id,
    moviePoster,
    movieTitle,
    genre,
    duration,
    releaseYear,
    // rating,
    summary,
    authorEmail,
  } = data;
  const [rating, setRating] = useState(0);
  const { user } = useContext(AuthContext);

  /******** Genre ********/
  const genres = [
    "comedy",
    "drama",
    "horror",
    "adventure",
    "war",
    "crime",
    "action",
    "sci-fi",
  ];
  //
  const handleRating = (rate) => {
    setRating(rate);
  };

  /*********** Released Year Start *************/

  const years = Array.from({ length: 55 }, (_, i) => ({
    value: 1970 + i,
    label: (1970 + i).toString(),
  }));

  /*********** Released Year End *************/

  const handleUpdateMovie = (event) => {
    event.preventDefault();
    const form = event.target;
    const moviePoster = form.poster.value;
    const movieTitle = form.title.value;
    const genre = form.genre.value;
    const duration = form.duration.value;
    const releaseYear = form.releaseYear.value;
    // const rating = form.rating.value;
    const scaledRating = rating;
    const summary = form.summary.value;
    if (rating === 0) {
      Alert(false, "Please select a rating before submitting.");
      return;
    }

    const photoUrlRegex = /^https?:\/\/(?:[a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,}(?:\/[^\s]*)?\.(?:jpg|jpeg|png|gif|bmp|webp)(\?.*)?$/;
    if (!photoUrlRegex.test(moviePoster)) {
      Alert(
        false,
        "The photo URL is invalid. Please provide a valid image URL."
      );
      return;
    }

    const movieDetails = {
      moviePoster,
      movieTitle,
      genre,
      duration,
      releaseYear,
      // rating,
      rating: scaledRating,
      summary,
      authorEmail: user.email,
    };

    fetch(`${import.meta.env.VITE_BASE_URL}/movies/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(movieDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          Alert(true, data.message);
        } else {
          Alert(false, data.message);
        }
      });
    form.reset();
    setRating(0);
  };
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = "Update Movie | Movie Portal";
  }, [pathname]);
  return (
    <section
      style={{
        backgroundImage: `url(${BGImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="py-10 px-4 md:px-8"
    >
      <div className="max-w-5xl mx-auto space-y-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Update Movie
          </h2>
        </div>
        <div className="bg-[rgb(244, 243, 240)] shadow-2xl rounded-xl p-6">
          <form
            onSubmit={handleUpdateMovie}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {/* Movie Poster */}
            <div className="form-control">
              <label className="label">
                <span className="font-semibold text-gray-700 text-lg md:text-xl">
                  Movie Poster URL
                </span>
              </label>
              <input
                defaultValue={moviePoster}
                name="poster"
                type="text"
                placeholder="Enter valid Movie Poster URL"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Movie Title */}
            <div className="form-control">
              <label className="label">
                <span className="font-semibold text-gray-700 text-lg md:text-xl">
                  Movie Title
                </span>
              </label>
              <input
                defaultValue={movieTitle}
                name="title"
                type="text"
                placeholder="Enter Movie Title"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Genre */}
            <div className="form-control">
              <label className="label">
                <span className="font-semibold text-gray-700 text-lg md:text-xl">
                  Genre
                </span>
              </label>
              <select name="genre" className="input input-bordered w-full">
                {genres.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
            </div>

            {/* Duration */}
            <div className="form-control">
              <label className="label">
                <span className="font-semibold text-gray-700 text-lg md:text-xl">
                  Duration
                </span>
              </label>
              <input
                defaultValue={duration}
                name="duration"
                type="number"
                placeholder="Enter Movie Duration (more than 60)"
                className="input input-bordered w-full"
                min={60}
                required
              />
            </div>

            {/* Release Year */}
            <div className="form-control">
              <label className="label">
                <span className="font-semibold text-gray-700 text-lg md:text-xl">
                  Release Year
                </span>
              </label>
              <select
                name="releaseYear"
                className="input input-bordered w-full"
              >
                {years.map((year) => (
                  <option key={year.value} value={year.value}>
                    {year.value}
                  </option>
                ))}
              </select>
            </div>

            {/* Rating */}
            <div className="form-control">
              <label className="label">
                <span className="font-semibold text-gray-700 text-lg md:text-xl">
                  Rating
                </span>
              </label>
              <Rating
                onClick={handleRating}
                ratingValue={rating}
                size={40}
                fillColor="gold"
                emptyColor="gray"
                iconsCount={5}
                allowHalfIcon
              />
              <span className="text-sm text-gray-600">
                Selected Rating: {rating} Stars
              </span>
            </div>

            {/* Summary */}
            <div className="form-control col-span-1 md:col-span-2">
              <label className="label">
                <span className="font-semibold text-gray-700 text-lg md:text-xl">
                  Summary
                </span>
              </label>
              <textarea
                defaultValue={summary}
                name="summary"
                cols="30"
                rows="4"
                className="rounded-xl border-2 p-3 w-full"
                placeholder="Enter Movie Summary (minimum 10 characters)"
                minLength={10}
                maxLength={250}
                style={{
                  resize: "none",
                }}
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6 col-span-1 md:col-span-2">
              <button
                type="submit"
                className="btn w-full bg-blue-500 text-white text-lg py-3 rounded-lg hover:bg-blue-600"
              >
                Update Movie
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UpdateMovie;
