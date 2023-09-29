import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CREATE_PRODUCT } from "../store/types";
import { useNavigate } from "react-router-dom";

export const ProductCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState({
    title: "",
    thumbnail: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (state.title && state.thumbnail) {
      dispatch({
        type: CREATE_PRODUCT,
        payload: { ...state, id: new Date().getMilliseconds() },
      });
      navigate("/");
    }
  };

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-200 m-5 mx-auto w-1/2">
      <h1 className="text-3xl">Create Product</h1>
      <form onSubmit={onSubmit}>
        <input
          name="title"
          placeholder="Your title here"
          className="w-full p-2"
          onChange={onChange}
        />
        <input
          name="thumbnail"
          placeholder="Product Thumbnail"
          className="w-full p-2"
          onChange={onChange}
        />
        <button type="submit" className="w-full p-2">
          Submit
        </button>
      </form>
    </div>
  );
};
