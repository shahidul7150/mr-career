import { async } from "@firebase/util";
import React, { useRef } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Social from "../SocialLogin/Social";
import "./Login.css";

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
    await sendPasswordResetEmail(email)
    alert("Sent email")
  }
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
          <Link
            to="/register"
            className="text-danger pe-auto text-decoration-none "
            onClick={resetPassword}
          >
            Reset Password
          </Link>{" "}
        </p>
      </div>
      <Social></Social>
    </div>
  );
};

export default Login;
