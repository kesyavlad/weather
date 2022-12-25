import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addCardWeather: (state, action) => {
      state.value.push({
        id: action.payload.id,
        city: action.payload.nameCity,
        temp: action.payload.temp,
      });
    },
    deleteCardWeather: (state, action) => {
      state.value = state.value.filter((card) => card.id !== action.payload.id);
    },
    updateCardWeather: (state, action) => {
      state.value = state.value.map((card) => {
        if (card.id === action.payload.idTest) {
          card.temp = action.payload.temprich;
        }
        return card;
      });
    },
  },
});

export const { addCardWeather, deleteCardWeather, updateCardWeather } =
  counterSlice.actions;

export default counterSlice.reducer;
