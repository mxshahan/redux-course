import React from "react";
import { useDispatch } from "react-redux";
import { DECREASE_ITEM, INCREASE_ITEM, REMOVE_FROM_CART } from "../store/types";

export const CartItem = ({ item, qty }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row gap-3">
      <div className="w-[80px] h-[80px] bg-white flex items-center justify-center">
        <img src={item.thumbnail} alt="product preview" />
      </div>
      <div>
        <h3 className="font-bold">
          {item.title} <span className="text-red-600 text-3xl"> x {qty}</span>
        </h3>
        <p>Product description here</p>
        <button
          className="text-red-500"
          onClick={() => {
            dispatch({
              type: REMOVE_FROM_CART,
              payload: item.id,
            });
          }}
        >
          Remove
        </button>{" "}
        |{" "}
        <button
          className="text-red-500"
          onClick={() => {
            dispatch({
              type: DECREASE_ITEM,
              payload: item.id,
            });
          }}
        >
          Decrease
        </button>{" "}
        |{" "}
        <button
          className="text-green-500"
          onClick={() => {
            dispatch({
              type: INCREASE_ITEM,
              payload: item.id,
            });
          }}
        >
          Increase
        </button>
      </div>
    </div>
  );
};
