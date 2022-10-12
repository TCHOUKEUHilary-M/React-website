import React from "react";
import Image1 from "./Image1";
import Image2 from "./Image2";
import Pruduct from "./Produit2";
import Search from "./Search";
import Shop from "./Shop";
import '../App.css';
const Main = ({cartCount, setCartCount}) => {
      return (
        <main className="Main container-fluid">
          <Image1 />
          <Shop />
          <Search />
          <Pruduct cartCount={cartCount} setCartCount={setCartCount } />
       <Image2/>
        </main>
      );
};
export default Main;