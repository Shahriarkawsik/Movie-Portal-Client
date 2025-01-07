import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Alert } from "../../Alert/Alert";

const ForgetPassword = () => {
  const { inputEmail } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const emailRef = useRef();
  const email = emailRef.current;
  const handleForgetPassword = (e) => {
    e.preventDefault();
    window.location.href = "https://mail.google.com/mail/u/0/";


  };
  return (
    <div className="max-w-screen-sm border mx-auto my-4 p-8 rounded-xl bg-gray-200">
      <h1 className="text-xl font-bold text-center">Reset Password</h1>
      <div className="divider"></div>
      <form className="p-4 space-y-4" onSubmit={handleForgetPassword}>
        <div>
          <span className="label-text">Email</span>
          <input
            ref={emailRef}
            type="email"
            defaultValue={inputEmail}
            required
            name="email"
            placeholder="Enter your email"
            className="input input-bordered input-primary w-full"
          />
        </div>
        <button className="btn btn-success w-full text-white">
          Reset Password
        </button>
      </form>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default ForgetPassword;

// import React, { useContext } from "react";
// import { AuthContext } from "../provider/AuthProvider";

// const ForgetPassword = () => {

//   return (

//   );
// };

// export default ForgetPassword;
