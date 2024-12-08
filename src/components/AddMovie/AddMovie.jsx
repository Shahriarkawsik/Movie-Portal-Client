import { Link, useLocation } from "react-router-dom";
import BGImg from "../../assets/image/BG/11.png";
import { useContext, useEffect, useState } from "react";
import { Alert } from "./../../Alert/Alert";
import Select from "react-select";
import { AuthContext } from "../../Providers/AuthProvider";
import { Rating } from "react-simple-star-rating";

const AddMovie = () => {
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

  // const [genre, setSelectedGenres] = useState(null);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      // Add the genre to the selected list
      setSelectedGenres((prev) => [...prev, value]);
    } else {
      // Remove the genre from the selected list
      setSelectedGenres((prev) => prev.filter((genre) => genre !== value));
    }
  };
  /****************/

  /*********** Released Year Start *************/

  const years = Array.from({ length: 55 }, (_, i) => ({
    value: 1970 + i,
    label: (1970 + i).toString(),
  }));

  /*********** Released Year End *************/

  const handleAddMovie = (event) => {
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

    fetch(`${import.meta.env.VITE_BASE_URL}/movies`, {
      method: "POST",
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
          Alert(false, "Unsuccessful");
        }
      });
    form.reset();
    setRating(0);
  };
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = "Add Movie | Movie Portal";
  }, [pathname]);
  return (
    <section
      style={{
        backgroundImage: `url(${BGImg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold text-center">
            Add Movie
          </h2>
        </div>
        <div className="bg-gray-50 shadow-xl rounded-lg p-6 sm:p-10">
          <form
            onSubmit={handleAddMovie}
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <div className="form-control">
              <label className="label">
                <span className="font-medium text-gray-700 text-lg">
                  Movie Poster URL
                </span>
              </label>
              <input
                name="poster"
                type="text"
                placeholder="Enter valid Movie Poster URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="font-medium text-gray-700 text-lg">
                  Movie Title
                </span>
              </label>
              <input
                name="title"
                type="text"
                placeholder="Enter Movie Title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="font-medium text-gray-700 text-lg">Genre</span>
              </label>
              <select name="genre" className="input input-bordered">
                {genres.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="font-medium text-gray-700 text-lg">
                  Duration
                </span>
              </label>
              <input
                name="duration"
                type="number"
                placeholder="Enter Movie Duration (more than 60)"
                className="input input-bordered"
                min={60}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="font-medium text-gray-700 text-lg">
                  Release Year
                </span>
              </label>
              <select
                id="year"
                name="releaseYear"
                className="input input-bordered"
              >
                {years.map((year) => (
                  <option key={year.value} value={year.value}>
                    {year.value}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="font-medium text-gray-700 text-lg">
                  Rating
                </span>
              </label>
              <Rating
                onClick={handleRating}
                ratingValue={rating}
                size={30}
                fillColor="gold"
                emptyColor="gray"
                max={5}
                iconsCount={5}
                allowHalfIcon={true}
              />
              <div>
                <span className="text-sm text-gray-600">
                  Selected Rating: {rating} Stars
                </span>
              </div>
            </div>
            <div className="form-control col-span-1 sm:col-span-2">
              <label className="label">
                <span className="font-medium text-gray-700 text-lg">
                  Summary
                </span>
              </label>
              <textarea
                name="summary"
                type="text"
                cols="30"
                rows="3"
                style={{ resize: "none" }}
                placeholder="Enter Movie Summary (Minimum 10 characters)"
                className="rounded-xl border-2 p-3"
                minLength={10}
                maxLength={250}
                required
              />
            </div>
            <div className="form-control col-span-1 sm:col-span-2">
              <input
                type="submit"
                value="Add Movie"
                className="btn w-full sm:w-auto bg-blue-500 text-white text-lg px-6 py-3 rounded-md shadow-md hover:bg-blue-600"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddMovie;
