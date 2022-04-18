import { async } from "@firebase/util";
import React, { useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Social from "../SocialLogin/Social";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  let errorShow;
  if (error) {
    errorShow = <p className="text-danger">Error: {error?.message}</p>;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast('Give your email')
    }
  };
  const navigateRegister = () => {
    navigate("/register");
  };
  return (
    <div className="login mx-auto ">
      <div className="login-bg">
        <h2>Please Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            ref={emailRef}
            type="email"
            name=""
            id=""
            placeholder="Your email"
            required
          />
          <input
            ref={passwordRef}
            type="password"
            name=""
            id=""
            placeholder="password"
            required
          />
          <input className="btn btn-primary" type="submit" value="Login" />
        </form>
        {errorShow}
        <p>
          New user?
          <Link
            to="/register"
            className="text-danger pe-auto text-decoration-none "
            onClick={navigateRegister}
          >
            Please Signup
          </Link>
        </p>
        <p>
          Forget Password?{" "}
          <button
            className="text-danger pe-auto text-decoration-none btn btn-link "
            onClick={resetPassword}
          >
            Reset Password
          </button>
        </p>
      </div>
      <Social></Social>
      <ToastContainer />
    </div>
  );
};

export default Login;
