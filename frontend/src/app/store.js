import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "../features/country/countrySlice";
import universityReducer from "../features/university/universitySlice";

export const store = configureStore({
  reducer: {
    country: countryReducer,
    university: universityReducer,
  },
});
