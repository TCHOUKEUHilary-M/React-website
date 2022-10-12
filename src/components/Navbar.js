import React from 'react';

const Navbar = ({cartCount}) => {
      return (
        <div className="row Nav-bar">
          <div className=" col-3 p-3">
            <span className="text-black fw-bolder fs-5 m-auto">OUR</span>
            <span className="text-danger fs-5 fw-bolder">Shop</span>
          </div>
          <div className="col-7 p-3 d-flex ">
            <a href="app.js" className="nav-link active h3 text-danger">
              Home
            </a>
            <a href="footer.js" className="nav-link h3 text-dark">
              Promotion
            </a>
            <a href="header.js" className="nav-link h3 text-dark">
              Contact
            </a>
          </div>
          <div className="col-2 ">
            <i
              className="fa-solid fa-cart-shopping rounded-circle bg-secondary"
    
            ></i>
            <span>{cartCount}</span>
          </div>
        </div>
      );
}
export default Navbar;