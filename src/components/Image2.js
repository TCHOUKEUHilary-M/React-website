
import React from "react";
import "../App.css";
const Image2 = () => {
  return (
    <div className="row d-flex">
      <div className="col-6">
        <img src= {require("../images/pullnoir.png")}  alt=""></img>
      </div>
      <div className="d-flex  flex-column p-6 m-auto justify-content-end col-6">
        <h1 className="fw-bolder text-center" >DEALS OF THE WEEK</h1>
        <div className="d-flex justify-content-center">
          <div className="rounded-circle m-2 d-flex align-items-center justify-content-center bg-white flex-column">
            <span className="text-danger fw-bold">1</span>
            <span className="fw-bold">Day</span>
          </div>
          <div className="rounded-circle m-2 d-flex align-items-center justify-content-center bg-white flex-column">
            <span className="text-danger fw-bold">24</span>
            <span className="fw-bold">Hours</span>
          </div>
          <div className="rounded-circle m-2 d-flex align-items-center justify-content-center bg-white flex-column">
            <span className="text-danger fw-bold">53</span>
            <span className="fw-bold">Minutes</span>
          </div>
          <div className="rounded-circle m-2 d-flex align-items-center justify-content-center bg-white flex-column">
            <span className="text-danger fw-bold">12</span>
            <span className="fw-bold">Seconds</span>
          </div>
        </div>
        <button className="btn btn-danger w-25  ms-5 align-self-center">
          <i className="fa-solid fa-arrow-right"></i>Shop Now
        </button>
      </div>
    </div>
  );
};
export default Image2;
