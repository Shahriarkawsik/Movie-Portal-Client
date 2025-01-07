import React from "react";
import { Link } from "react-router-dom";
import Error from "../../assets/image/404.jpg";

const ErrorPage = () => {
  return (
    <div className="text-center px-6 md:px-12 py-12 w-full max-h-screen">
      <img src={Error} className="w-full h-[750px]" alt="" />
      <Link
        to={"/"}
        className="inline-block bg-color1 text-white px-20 py-3 rounded-full font-semibold shadow hover:bg-red-500 transition-all"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
