import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Social from "../SocialLogin/Social";
import "./Login.css";

const Login = () => {
    const navigate = useNavigate()
    

    const navigateRegister = () => {
        navigate("/register")
    }
  return (
    <div className="login mx-auto ">
      <div className="login-bg">
        <h2>Please Login</h2>
        <form>
          <input type="email" name="" id="" placeholder="Your email" required/>
          <input type="password" name="" id="" placeholder="password" required/>
          <input className="btn btn-primary" type="submit" value="Login" />
        </form>
        <p>
          New user?{" "}
          <Link
          to="/register"
          className="text-danger pe-auto text-decoration-none "
          onClick={navigateRegister}
        >
          Please Signup
        </Link>
        </p>
      </div>
      <Social></Social>
    </div>
  );
};

export default Login;
