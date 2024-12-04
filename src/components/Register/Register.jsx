import React, { useContext, useEffect, useRef, useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Alert } from "./../../Alert/Alert";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, createUserWithGoogle } = useContext(AuthContext);
  const emailRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const instructions = (
    <ol>
      <h2 className="text-xl font-semibold underline">
        Your password must include:
      </h2>
      <li>at least one uppercase letter.</li>
      <li>at least one lowercase letter.</li>
      <li>The password must be at least 6 characters long.</li>
    </ol>
  );

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.Username.value;
    const photo = event.target.photo.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    setErrorMessage("");

    const passwordRegEx = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if (errorMessage) {
      Alert(false, "Error occurs");
      return;
    } else if (!passwordRegEx.test(password)) {
      Alert(false, "Follow the instruction");
      setErrorMessage(instructions);
      return;
    }

    createUser(email, password)
      .then((result) => {
        event.target.reset();
        navigate("/");
        Alert(true, "Successfully registered your account.");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  const handleRegisterWithGoogle = () => {
    createUserWithGoogle()
      .then((result) => {
        navigate("/");
        Alert(true, "Successfully registered your account.");
      })
      .catch((error) => {
        Alert(false, "Register unsuccessful");
        setErrorMessage(error.message);
      });
  };

  const { pathname } = useLocation();
  useEffect(() => {
    document.title = "Register | Eco-Adventure Experiences";
  }, [pathname]);
  return (
    <section className="w-1/2 mx-auto space-y-6">
      <h1 className="text-5xl font-bold text-center">Register Now</h1>
      <form onSubmit={handleRegister} className="space-y-4">
        {/* Username */}
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            name="Username"
            className="grow"
            placeholder="Username"
            required
          />
        </label>
        {/* Photo URL */}
        <label className="input input-bordered flex items-center gap-2">
          <svg className="w-5" viewBox="0 0 640 512">
            <path d="M256 0L576 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64l-320 0c-35.3 0-64-28.7-64-64l0-224c0-35.3 28.7-64 64-64zM476 106.7C471.5 100 464 96 456 96s-15.5 4-20 10.7l-56 84L362.7 169c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6l80 0 48 0 144 0c8.9 0 17-4.9 21.2-12.7s3.7-17.3-1.2-24.6l-96-144zM336 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM64 128l96 0 0 256 0 32c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-32 160 0 0 64c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192c0-35.3 28.7-64 64-64zm8 64c-8.8 0-16 7.2-16 16l0 16c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-16 0zm0 104c-8.8 0-16 7.2-16 16l0 16c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-16 0zm0 104c-8.8 0-16 7.2-16 16l0 16c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-16 0zm336 16l0 16c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-16 0c-8.8 0-16 7.2-16 16z" />
          </svg>
          <input
            type="text"
            name="photo"
            className="grow"
            placeholder="Photo URL"
            required
          />
        </label>
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
          />
          <button onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
        </label>

        {/* Submit */}
        <label className="input input-bordered flex items-center gap-2 bg-blue-600">
          <input
            type="submit"
            className="grow text-2xl text-white font-semibold"
            value="Register"
          />
        </label>
      </form>
      <div className="divider">Sing Up with</div>
      <div className="flex justify-center items-center gap-3">
        <div>
          <button
            onClick={handleRegisterWithGoogle}
            className="border rounded-md p-2 text-xl font-semibold flex items-center justify-center gap-2"
          >
            <FcGoogle />
            <span>Google</span>
          </button>
        </div>
      </div>
      <h1>
        Have an Account ?{" "}
        <Link className="text-blue-500" to={"/login"}>
          Login Here
        </Link>
      </h1>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </section>
  );
};

export default Register;
