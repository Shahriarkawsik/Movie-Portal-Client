import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import Movie from "./movie";
import bgImg from "../../assets/image/BG/bgImg.jpg";
import FavoriteMovieCard from "./FavoriteMovieCard";

const MyFavorites = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = "Favorite Movie | Movie Portal";
  }, [pathname]);

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/user`)
      .then((res) => res.json())
      .then((data) => setMovies(data.data));
  }, []);
  console.log(movies);
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
        Your Favorite Movies
      </h1>
      <div className="w-11/12 lg:w-9/12 mx-auto ">
        <div className="grid grid-cols-3 gap-5">
          {movies.map((movie, _id) => (
            <FavoriteMovieCard key={_id} movie={movie}></FavoriteMovieCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyFavorites;
