import React, { useContext, useEffect, useRef, useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Alert } from "./../../Alert/Alert";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { loginUser, createUserWithGoogle, destination, setInputEmail } =
    useContext(AuthContext);
  const emailRef = useRef();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    setInputEmail(email);
    loginUser(email, password)
      .then((result) => {
        event.target.reset();
        Alert(true, "Successfully login your account");
        navigate(`${destination}`);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        Alert(false, "login unsuccessfully");
      });
  };
  const handleLoginWithGoogle = () => {
    // const email = emailRef.current.value;
    createUserWithGoogle()
      .then((result) => {
        navigate(`${destination}`);
        Alert(true, "Successfully login your account.");
      })
      .catch((error) => {
        Alert(false, "login unsuccessful");
        setErrorMessage(error.message);
      });
  };
  const { pathname } = useLocation(); 
  useEffect(() => {
    document.title = "Login | Eco-Adventure Experiences";
  }, [pathname]);
  return (
    <section className="w-1/2 mx-auto space-y-6">
      <h1 className="text-5xl font-bold text-center">Login Now</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        {/* email */}
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            ref={emailRef}
            type="email"
            name="email"
            className="grow"
            placeholder="Email"
            required
          />
        </label>
        {/* password */}
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            className="grow"
            placeholder="password"
            required
          />
          <button onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
        </label>
        <p className="text-right underline cursor-pointer">
          <Link to={"/forgetPassword"}>Forget Password ?</Link>
        </p>
        {/* Submit */}
        <label className="input input-bordered flex items-center gap-2 bg-blue-600">
          <input
            type="submit"
            className="grow text-2xl text-white font-semibold"
            value="Login"
          />
        </label>
      </form>
      <div className="divider">Sing Up with</div>
      <div className="flex justify-center items-center gap-3">
        <div>
          <button
            onClick={handleLoginWithGoogle}
            className="border rounded-md p-2 text-xl font-semibold flex items-center justify-center gap-2"
          >
            <FcGoogle />
            <span>Google</span>
          </button>
        </div>
      </div>
      <h1>
        Don't have an Account ?
        <Link className="text-blue-500" to={"/register"}>
          Register Here
        </Link>
      </h1>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </section>
  );
};

export default Login;
