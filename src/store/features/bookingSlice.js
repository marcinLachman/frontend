import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const URL = 'http://10.43.8.241:5000/api/v1/booking/';
const URL = 'https://glorious-lamb-train.cyclic.app/api/v1/booking/';
// const URL = 'https://backendhub-production.up.railway.app/api/v1/booking/';

export const getAllBooking = createAsyncThunk('booking/getAllBooks', async (thunkAPI) => {
  try {
    const response = await axios.get(URL, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

export const postBookingData = createAsyncThunk('booking/postBookingData', async (dataBook, thunkAPI) => {
  try {
    const response = await axios.post(URL, dataBook)
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

const initialState = {
  booksData: [],
  isLoading: true,
  error: false
};

const booksSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllBooking.pending, (state) => {
        state.isLoading = true;
        state.error = false
      })
      .addCase(getAllBooking.fulfilled, (state, action) => {
        state.isLoading = false;
        state.booksData = action.payload;
        state.error = false
      })
      .addCase(getAllBooking.rejected, (state, action) => {
        state.isLoading = false;
        state.booksData = [];
        state.error = true;
      })
      .addCase(postBookingData.fulfilled, (state, action) => {
        state.booksData = state.booksData.concat(action.payload)
      })
  }
});

export default booksSlice.reducer;