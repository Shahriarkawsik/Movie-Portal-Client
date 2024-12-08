import { useContext, useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import Movie from "./movie";
import bgImg from "../../assets/image/BG/bgImg.jpg";
import { AuthContext } from "../../Providers/AuthProvider";
import SetLoading from "../SetLoading/SetLoading";

const AllMovie = () => {
  const { dataLoading, setDataLoading } = useContext(AuthContext);
  const [movies, setMovies] = useState([]);
  const [searchMsg, setSearchMsg] = useState("");

  useEffect(() => {
    setDataLoading(true);
    fetch(`${import.meta.env.VITE_BASE_URL}/movies`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.data);
        setDataLoading(false);
      });
  }, []);
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = "All Movie | Movie Portal";
  }, [pathname]);
  const handleSearch = (event) => {
    if (event.target.value) {
      fetch(`${import.meta.env.VITE_BASE_URL}/search`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ search: event.target.value }),
      })
        .then((res) => res.json())
        .then((result) => {
          // console.log(result.data);
          setMovies(result.data);
          setSearchMsg(result.message);
        });
    }
    if (!event.target.value) {
      fetch(`${import.meta.env.VITE_BASE_URL}/movies`)
        .then((res) => res.json())
        .then((result) => {
          setMovies(result.data);
          setSearchMsg(result.message);
        });
    }
  };

  return dataLoading ? (
    <SetLoading></SetLoading>
  ) : (
    <div
      className="py-10 space-y-10"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "100% 100%",
        backgroundColor: "rgba(0,0,0,0.2)",
      }}
    >
      <h1 className="text-white text-4xl text-center font-JosefinSans">
        {searchMsg ? searchMsg : "All Movies"}
      </h1>
      <div className="w-11/12 lg:w-9/12 mx-auto space-y-10">
        <div className="text-end">
          {/* <label className="input input-bordered flex items-center gap-2">
          <input
            onChange={handleSearch}
            placeholder="Search by movie name"
            type="text"
            className="grow"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label> */}
          <input
            onChange={handleSearch}
            type="text"
            name=""
            id=""
            placeholder="Search by movie name"
            className="p-3 rounded-md"
          />
        </div>
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
