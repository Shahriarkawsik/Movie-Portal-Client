import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import Movie from "./movie";
import bgImg from "../../assets/image/BG/bgImg.jpg";
import FavoriteMovieCard from "./FavoriteMovieCard";
import { AuthContext } from "../../Providers/AuthProvider";

const MyFavorites = () => {
  const { user } = useContext(AuthContext);
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = "Favorite Movie | Movie Portal";
  }, [pathname]);

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    if (user) {
      console.log(user.email);
      fetch(`${import.meta.env.VITE_BASE_URL}/favorite?email=${user.email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((getRes) => {
          setMovies(getRes.data.favorite);
          console.log(getRes.data.favorite);
        });
    }
  }, []);

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
