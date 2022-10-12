import React from "react";

const Topbar = () => {
      return (
        <div className="top-bar container-fluid d-flex p-3">
          <div className="col-6">
            <p className="fs-larger">
              Free shipping on all orders overs 50 XFA
            </p>
          </div>
          <div className="col-6 d-flex justify-content-between ">
            <p className="fs-larger">ecomerser @info.com</p>
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-right-to-bracket"></i>
              <a className="nav-link text-white" href="Login.js">
                Login
              </a>
              <a
                className="nav-link btn btn-danger text-white"
                href="Register.js"
              >
                <i className="fa-regular fa-user-plus"></i>
                Register
              </a>
            </div>
          </div>
        </div>
      );
};
export default Topbar;
