import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import Social from "../SocialLogin/Social";
import auth from "../../../firebase.init";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };
  if (user) {
    navigate("/home")
  }
  const handleSignUp = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
console.log(email,password);
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="login mx-auto ">
      <div className="login-bg">
        <h2>Please Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <input type="text" name="name" id="" placeholder="Your name" />
          <input
            type="email"
            name="email"
            id=""
            placeholder="Your email"
            required
          />
          <input
            type="password"
            name="password"
            id=""
            placeholder="password"
            required
          />
          <input type="checkbox" name="terms" id="terms" />
          <label htmlFor="terms">Accept mr-career terms and conditions</label>
          <input className="btn btn-primary mt-2" type="submit" value="Signup" />
        </form>
        <p>
          New user?{" "}
          <Link
            to="/login"
            className="text-danger pe-auto text-decoration-none "
            onClick={navigateLogin}
          >
            Please Login
          </Link>
        </p>
      </div>
      <Social></Social>
    </div>
  );
};

export default Signup;
