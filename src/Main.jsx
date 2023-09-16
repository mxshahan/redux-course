import React from 'react';

import './index.css';
import products from './data.json';
import { Products } from './components/Products';
import { Cart } from './components/Cart';

export const RootComponent = () => {
  const handleSubmit = () => {
    alert('Order submitted!');
  };

  return (
    <div className="w-full h-screen bg-yellow-50">
      <h1 className="text-3xl font-bold p-2">Main Component</h1>
      <div className="flex flex-row gap-5 m-2">
        <Products products={products} />
        <Cart handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};
