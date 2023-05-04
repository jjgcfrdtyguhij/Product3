import "./styles.css";
import ProductList from "./ProductList";
import Navbar from "./Navbar";
import About from "./About";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <>
      {console.log("h")}
      <Navbar />
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <ProductList />
    </>
  );
}
