import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  post: {},
  loading: true,
};

export const getPost = createAsyncThunk(
  "post/getPost",
  async (city, { rejectedWithValue, dispatch }) => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9275c2a3cac571b570c25a7c659b2969&units=metric`
    );
    dispatch(setPost(res.data));
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPost: (state, action) => {
      state.post = action.payload;
    },
  },
  extraReducers: {
    [getPost.fulfilled]: () => console.log("fulfilled"), //викликається якщо запит пройшов успішно
    [getPost.pending]: () => console.log("pending"), //викликається коли очікуємо на наш запит
    [getPost.rejected]: () => console.log("404"), //викликається коли помилка
  },
});
export const { setPost } = postSlice.actions;
export default postSlice.reducer;
