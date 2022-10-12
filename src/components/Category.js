import React from "react";

const Category = () => {
  return (
    <div>
      <div>
        <h1 className="fw-bolder m-5">Shop</h1>
        <hr className="h-25 bg-danger m-0 p-0 opacity-100 "></hr>
      </div>
      <div className="d-flex justify-content-evenly">
        <div className="col-3 w-100">
          <button className="btn btn-danger w-50 m-1 text-dark fw-bolder">
            All
          </button>
        </div>
        <div className="col-3 w-100">
          <button className="btn btn-secondary opacity-50 fw-bolder w-50 m-1  ">
            Women's
          </button>
        </div>
        <div className="col-3 w-100">
          <button className="btn btn-secondary opacity-50 fw-bolder w-50 m-1 ">
            Men's
          </button>
        </div>
        <div className="col-3 w-100 ">
          <button className="btn btn-secondary opacity-50 fw-bolder w-50 m-1 ">
            All
          </button>
        </div>
      </div>
    </div>
  );
};
export default Category;
