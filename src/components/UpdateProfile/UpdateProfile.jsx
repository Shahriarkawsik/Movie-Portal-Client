import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { Alert } from "../../Alert/Alert";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const UpdateProfile = () => {
  const { updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleUpdateProfile = (event) => {
    event.preventDefault();
    // Alert(true, "Profile updated!");
    const displayName = event.target.Username.value;
    const photoURL = event.target.photo.value;

    updateUserProfile({ displayName, photoURL })
      .then(() => {
        event.target.reset();
        navigate("/");
        Alert(true, "Profile updated!");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname == `/updateProfile`) {
      document.title = ` Update Profile | Eco-Adventure Experiences`;
    }
  }, [pathname]);
  return (
    <section className="w-11/12 lg:w-1/2 mx-auto space-y-6 my-32">
      <h1 className="text-5xl font-bold text-center">Update your Profile</h1>
      <form onSubmit={handleUpdateProfile} className="space-y-4">
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
        {/* Submit */}
        <label className="input input-bordered flex items-center gap-2 bg-blue-600">
          <input
            type="submit"
            className="grow text-2xl text-white font-semibold"
            value="Update"
          />
        </label>
      </form>

      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </section>
  );
};

export default UpdateProfile;
