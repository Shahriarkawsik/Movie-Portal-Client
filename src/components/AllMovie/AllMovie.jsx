import { useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import Movie from "./movie";
import bgImg from "../../assets/image/BG/bgImg.jpg";

const AllMovie = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/movies`)
      .then((res) => res.json())
      .then((data) => setMovies(data.data));
  }, []);
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = "All Movie | Movie Portal";
  }, [pathname]);
  return (
    <div
      className="py-10 space-y-10"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "100% 100%",
        backgroundColor: "rgba(0,0,0,0.2)",
      }}
    >
      <h1 className="text-white text-4xl text-center font-JosefinSans">
        All Movies
      </h1>
      <div className="w-11/12 lg:w-9/12 mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {movies.map((movie, _id) => (
            <Movie key={_id} movie={movie}></Movie>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllMovie;
