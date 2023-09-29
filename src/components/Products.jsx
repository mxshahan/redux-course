import React from 'react';
import { SingleProduct } from './SingleProduct';

export const Products = ({ products = [] }) => {
  return (
    <div className="bg-red-200 w-2/3 p-10 grid grid-cols-6 gap-5 h-full">
      {products?.map((item, index) => (
        <SingleProduct item={item} key={index} index={index} />
      ))}
    </div>
  );
};
