import { Link, useLocation } from "react-router-dom";
import BGImg from "../../assets/image/BG/11.png";
import { useEffect, useState } from "react";
import { Alert } from "./../../Alert/Alert";
import Select from "react-select";

const AddMovie = () => {
  /******** Genre ********/
  const genres = ["Comedy", "Drama", "Horror", "Action", "Thriller"];
  const [genre, setSelectedGenres] = useState([]);

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
    const duration = form.duration.value;
    const releaseYear = form.releaseYear.value;
    const rating = form.rating.value;
    const summary = form.summary.value;
    // const genre = form.genre.value;

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
      rating,
      summary,
    };

    fetch("http://localhost:5000/movies", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(movieDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    event.target.reset();
  };
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = "Add Movie | Movie Portal";
  }, [pathname]);
  return (
    <section
      style={{
        backgroundImage: `url(${BGImg})`,
        backgroundSize: "100% 100%",
      }}
    >
      <div className="w-11/12 lg:w-9/12 mx-auto space-y-10">
        <div>
          <h2 className="text-4xl font-bold text-center">Add Movie</h2>
        </div>
        <div className="bg-[rgb(244, 243, 240)] shadow-2xl rounded-xl">
          <form
            onSubmit={handleAddMovie}
            className="card-body grid grid-cols-1 lg:grid-cols-2"
          >
            <div className="form-control">
              <label className="label">
                <span className="font-semibold font-Raleway text-color3.8 text-xl ">
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
                <span className="font-semibold text-color3.8 text-xl ">
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

            {/* Genre */}
            <div className="form-control">
              <label className="label">
                <span className="font-semibold text-color3.8 text-xl ">
                  Genre
                </span>
              </label>

              {genres.map((genre, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={`genre-${index}`}
                    value={genre}
                    onChange={handleCheckboxChange}
                  />
                  <label
                    htmlFor={`genre-${index}`}
                    style={{ marginLeft: "8px" }}
                  >
                    {genre}
                  </label>
                </div>
              ))}

              {/* <input
                name="genre"
                type="text"
                placeholder="Genre"
                className="input input-bordered"
                required
              /> */}
            </div>

            {/* Duration */}
            <div className="form-control">
              <label className="label">
                <span className="font-semibold text-color3.8 text-xl ">
                  Duration
                </span>
              </label>
              <input
                name="duration"
                type="number"
                placeholder="Enter Movie Duration ( more then 60)"
                className="input input-bordered"
                min={60}
                required
              />
            </div>
            {/* Release Year */}
            <div className="form-control">
              <label className="label">
                <span className="font-semibold text-color3.8 text-xl ">
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
            {/* Rating */}
            <div className="form-control">
              <label className="label">
                <span className="font-semibold text-color3.8 text-xl ">
                  Rating
                </span>
              </label>
              <input
                name="rating"
                type="number"
                max={10}
                placeholder="Enter your Rating"
                className="input input-bordered"
                required
              />
            </div>
            {/* Summary */}
            <div className="form-control col-span-2">
              <label className="label">
                <span className="font-semibold text-color3.8 text-xl ">
                  Summary
                </span>
              </label>
              {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
              <textarea
                name="summary"
                type="text"
                style={{ resize: "none" }}
                placeholder="Enter Movie Summary ( Minimum 10 characters required )"
                className="input input-bordered p-3"
                minLength={10}
                required
              />
            </div>

            <div className="form-control mt-6 col-span-2 ">
              <input
                type="submit"
                value="Add Movie"
                className="btn text-color4 bg-color7 text-2xl font-Rancho"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddMovie;
