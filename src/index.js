import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import store from "./store";
import { RootComponent } from "./Main";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductCreate } from "./components/ProductCreate";

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route index element={<RootComponent />} />
            <Route path="/create" element={<ProductCreate />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
