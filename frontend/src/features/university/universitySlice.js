import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import universityService from "./universityService";

const initialState = {
  universities: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const getUniversities = createAsyncThunk(
  "university/getUniversities",
  async (key, thunkAPI) => {
    try {
      return universityService.getUniversities(key);
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

export const getUniversity = createAsyncThunk(
  "university/getUniversity",
  async (id, thunkAPI) => {
    try {
      return universityService.getUniversity(id);
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

export const deleteUniversity = createAsyncThunk(
  "university/deleteUniversity",
  async (id, thunkAPI) => {
    try {
      return universityService.deleteUniversity(id);
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

export const createUniversity = createAsyncThunk(
  "university/createUniversity",
  async (universityData, thunkAPI) => {
    try {
      return universityService.createUniversity(universityData);
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

export const updateUniversity = createAsyncThunk(
  "university/updateUniversity",
  async ({ updatedData, universityId }, thunkAPI) => {
    try {
      return universityService.updateUniversity(updatedData, universityId);
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

export const universitySlice = createSlice({
  name: "university",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUniversities.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUniversities.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.universities = action.payload.data;
      })
      .addCase(getUniversities.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.data;
      })
      .addCase(getUniversity.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUniversity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.universities = action.payload.data;
      })
      .addCase(getUniversity.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.data;
      })
      .addCase(deleteUniversity.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteUniversity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.universities = state.universities.filter(
          (university) => university._id !== action.payload.data._id
        );
      })
      .addCase(deleteUniversity.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
      })
      .addCase(createUniversity.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createUniversity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.universities.push(action.payload.data);
      })
      .addCase(createUniversity.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(updateUniversity.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateUniversity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.universities = state.universities.map((university) => {
          if (university._id === action.payload.data._id) {
            return { ...action.payload.data };
          }
          return university;
        });
      })
      .addCase(updateUniversity.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      });
  },
});

export default universitySlice.reducer;

export const { reset } = universitySlice.actions;
