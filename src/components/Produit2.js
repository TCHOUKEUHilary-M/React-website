import React from "react";
import Feautures from "./Feautures";
import Produit from "./Produit";
import data from "../products";

const Pruduct = ({cartCount,setCartCount}) => {
  return (
    <div className="container-fluid bg-white justify-content-center align-items-center d-flex">
      <div className="row d-flex justify-content-center">
        {
          data.map((product) => {
            return (
              <div
                className=" col-4 p-4 justify-content-center align-items-center d-flex flex-column"
                key={product.id}
              >
                <Produit productImg={product.img} />
                <Feautures
                  {...product}
                  cartCount={cartCount}
                  setCartCount={setCartCount}
                />
              </div>
            );
          })
        }
        
        
      </div>
    </div>
  );
};
export default Pruduct;
