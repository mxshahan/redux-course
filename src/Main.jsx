import React from "react";

import "./index.css";
import { Products } from "./components/Products";
import { Cart } from "./components/Cart";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const RootComponent = () => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.products);
  const handleSubmit = () => {
    alert("Order submitted!");
  };

  return (
    <div className="w-full h-screen bg-yellow-50">
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl font-bold p-2">Main Component</h1>
        <button
          className="bg-red-400 p-3 text-white"
          onClick={() => navigate("/create")}
        >
          Create Product
        </button>
      </div>
      <div className="flex flex-row gap-5 m-2">
        <Products products={products} />
        <Cart handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};
