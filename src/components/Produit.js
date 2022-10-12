import React from "react";

const Produit = (props) => {
  return  (
    <div className="bg-secondary bg-opacity-25 w-100 align-items-center  d-flex justify-content-center">
      <img src={props.productImg} alt="" className="w-50"></img>
    </div>
  );
};
export default Produit;
