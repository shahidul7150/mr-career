import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import Social from "../SocialLogin/Social";
import auth from "../../../firebase.init";
import { async } from "@firebase/util";

const Signup = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, profileUpdateError] = useUpdateProfile(auth);
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };
  
    
  
  const handleSignUp =async (event) => {
    event.preventDefault();
    const displayName = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName });
    console.log('Updated profile');
    navigate("/home");
    
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
          <input
            onClick={() => setAgree(!agree)}
            type="checkbox"
            name="terms"
            id="terms"
          />
          <label
            className={`ps-2 ${agree ? "" : "text-danger"}`}
            htmlFor="terms"
          >
            Accept mr-career terms and conditions
          </label>
          <input
            disabled={!agree}
            className="btn btn-primary mt-2"
            type="submit"
            value="Signup"
          />
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
