import React from "react";

const Feautures = (props) => {
  return (
    <div className="w-50 justify-content-center d-flex flex-column ">
      <h5 className="m-auto">{props.title }</h5>
      <h5 className="text-danger m-auto"> {props.price }</h5>
              <button onClick={() => {props.setCartCount(props.cartCount + 1)}} className="btn btn-danger w-100 my-2">Add to cart</button>
    </div>
  );
};
export default Feautures;
