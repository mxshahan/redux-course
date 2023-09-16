import React from 'react';
import { CartItem } from './CartItem';
import { useSelector } from 'react-redux';

export const Cart = ({ handleSubmit }) => {
  const cartItems = useSelector((state) => state.cart);
  return (
    <div className="bg-gray-200 w-1/3 flex-shrink-0 h-full">
      <h3 className="bg-red-300 text-2xl p-2">Cart</h3>
      <div className="p-2 ">
        {cartItems.length === 0 ? (
          'No item added'
        ) : (
          <div className="flex flex-col gap-4">
            {cartItems.map((item, index) => (
              <CartItem key={index} item={item.product} qty={item.qty} />
            ))}
          </div>
        )}
      </div>
      <button className="bg-red-500 text-white w-full p-2 text-xl" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
