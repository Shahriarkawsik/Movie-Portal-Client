import {
  Link,
  Navigate,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom";
import BGImg from "../../assets/image/BG/10.png";
import { Alert } from "../../Alert/Alert";
const MovieDetails = () => {
  const navigate = useNavigate();
  const { data } = useLoaderData();
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
  } = data;

  const handleDeleteMovie = (id) => {
    fetch(`http://localhost:3000/movies/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // Redirect to the movies page after deletion
          navigate("/movies");
          Alert(true, "Movie is deleted.");
        } else {
          Alert(false, "Failed to delete the movie.");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  const handleAddFavorite = () => {
    fetch(`http://localhost:3000/favorite`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: authorEmail, id: _id }),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.success){
          Alert(true,data.message)
        }
        console.log(data.success);
      });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${BGImg})`,
        backgroundSize: "100% 100%",
      }}
    >
      <div className="w-11/12 lg:w-9/12 h-[600px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-10">
        <img className="rounded-2xl" src={moviePoster} alt="" />
        <div className="">
          <h2 className="font-bold text-2xl mb-2">{movieTitle}</h2>
          <div className="mb-4 ">
            <p className="text-sm text-gray-400 mb-1">
              <span className="font-semibold text-gray-300">Genre:</span>{" "}
              {genre}
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
            <p className="text-sm text-gray-300 line-clamp-3 mb-4 ">
              {summary}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <Link>
              <button
                onClick={() => handleDeleteMovie(_id)}
                className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition  "
              >
                Delete Movie
              </button>
            </Link>
            <Link>
              <button
                onClick={() => handleAddFavorite()}
                className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition  "
              >
                Add to Favorite
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
