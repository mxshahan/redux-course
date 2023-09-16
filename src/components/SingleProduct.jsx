import React from 'react';
import { useDispatch } from 'react-redux';
import { ADD_TO_CART } from '../store/types';

export const SingleProduct = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white">
      <h3 className="text-lg p-2">{item.title}</h3>
      <div className="h-[150px] text-center">
        <img src={item.thumbnail} alt="Product Thumbnail" className="h-full object-contain" />
      </div>
      <button
        className="bg-red-500 text-white p-1 w-full"
        onClick={() => {
          dispatch({ type: ADD_TO_CART, payload: item });
        }}
      >
        Add to cart
      </button>
    </div>
  );
};
