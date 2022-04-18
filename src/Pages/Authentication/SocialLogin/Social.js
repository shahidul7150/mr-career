import React from "react";
import google from "../../../images/icon/google .png";
import github from "../../../images/icon/github.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const Social = () => {
  const [signInWithGoogle, user, googleLoading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, githubLoading, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  let errorShow;
  if (googleLoading || githubLoading) {
    return <Loading></Loading>
  }
  if (error || error1) {
    errorShow = (
      <p className="text-danger">
        Error: {error?.message} {error1?.message}
      </p>
    );
  }
  if (user || user1) {
    navigate("/home");
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div
          style={{ height: "1px" }}
          className="bg-secondary opacity-25  w-50"
        ></div>
        <p className="mt-2 px-2">or</p>
        <div
          style={{ height: "1px" }}
          className="bg-secondary  opacity-25 w-50"
        ></div>
      </div>
      {errorShow}
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-primary w-50 mb-2 d-block mx-auto"
      >
        <img width="30px" className=" pe-2" src={google} alt="" />
        Google Sign In
      </button>
      <button
        onClick={() => signInWithGithub()}
        className="btn btn-primary  w-50 mb-2 d-block mx-auto"
      >
        <img width="30px" className=" pe-2" src={github} alt="" />
        Github Sign In
      </button>
    </div>
  );
};

export default Social;
