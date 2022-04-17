import React from "react";
import google from "../../../images/icon/google .png"
import facebook from "../../../images/icon/facebook.png"
const Social = () => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-secondary opacity-25  w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-secondary  opacity-25 w-50"></div>
          </div>
          <button className="btn btn-primary w-50 mb-2 d-block mx-auto">
              <img width="30px" className=" pe-2" src={google} alt="" />
              Google Sign In
          </button>
          <button className="btn btn-primary  w-50 mb-2 d-block mx-auto">
          <img width="30px" className=" pe-2" src={facebook} alt="" />
              Google Sign In
          </button>
    </div>
  );
};

export default Social;
