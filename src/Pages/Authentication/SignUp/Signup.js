import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Social from '../SocialLogin/Social';

const Signup = () => {
    const navigate = useNavigate()
    

    const navigateLogin = () => {
        navigate("/login")
    }
    return (
        
            <div className="login mx-auto ">
      <div className="login-bg">
        <h2>Please Sign Up</h2>
        <form>
          <input type="text" name="" id=""  placeholder='Your name'/>
          <input type="email" name="" id="" placeholder='Your email' required/>
          <input type="password" name="" id="" placeholder='password'required/>
          <input className="btn btn-primary" type="submit" value="Login" />
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