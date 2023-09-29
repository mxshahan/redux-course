import { createSlice } from "@reduxjs/toolkit";
import data from "../../data.json";

const product = createSlice({
  name: 'product',
  initialState: data,
  reducers: {}
})

export default product.reducer