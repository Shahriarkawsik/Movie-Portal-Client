import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center px-6 md:px-12 py-12 w-full Rubik">
      <h1 className="text-6xl md:text-8xl font-bold text-color2 mb-4">404</h1>
      <p className="text-xl md:text-2xl text-color1 font-semibold mb-4">
        Page Not Found
      </p>
      <p className="text-gray-600 mb-8">
        Sorry, the page you're looking for doesn't exist. It might have been
        moved or deleted.
      </p>
      <Link
        to={"/"}
        className="inline-block bg-teal-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-teal-700 transition-all"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;