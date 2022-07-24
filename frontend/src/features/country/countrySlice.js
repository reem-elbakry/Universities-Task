import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import countryService from "./countryService";

const initialState = {
  countries: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const getCountries = createAsyncThunk(
  "country/getCountries",
  async (_, thunkAPI) => {
    try {
      return countryService.getCountries();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.countries = action.payload.data;
      })
      .addCase(getCountries.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
      });
  },
});

export default countrySlice.reducer;

export const { reset } = countrySlice.actions;
