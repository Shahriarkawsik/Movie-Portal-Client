import React, { useEffect, useState } from "react";

const TrendingMovie = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/trendingMovie`)
      .then((res) => res.json())
      .then((data) => setMovies(data.data));
  }, []);
  // console.log(movies);
  return <div>
    
  </div>;
};

export default TrendingMovie;
