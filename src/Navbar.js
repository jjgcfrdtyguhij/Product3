import "./styles.css";
import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav>
        <Link to="/about">About</Link>&nbsp;
        <Link to="/products">Products</Link>
      </nav>
    </>
  );
}
