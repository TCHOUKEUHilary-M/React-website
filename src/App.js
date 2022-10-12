
import Main from "./components/Main";
import "./App.css";
import Header from "./components/Header";
import Footer  from "./components/Footer";
import { useState } from 'react';

function App() {
  const [cartCount, setCartCount] = useState(10);
  return (
    <div className="App">
      <Header cartCount={cartCount}  />
      <Main cartCount={cartCount} setCartCount={setCartCount} />
      <Footer />
    </div>
  );
}

export default App;
