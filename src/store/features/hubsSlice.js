import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const URL = 'https://backendhub-production.up.railway.app/api/v1/hubs';
const URL = 'http://10.43.8.241:5000/api/v1/hubs';

export const getAllHubs = createAsyncThunk('hubs/getAllHubs', async (thunkAPI) => {
  try {
    const response = await axios.get(URL , {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});
export const getHubDataById = createAsyncThunk('hubs/getHubDataById', async (id, thunkAPI) => {
  try {
    const response = await axios.get(`${URL}/${id}`)
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

const initialState = {
  hubsData: [],
  hubDataById: [],
  isLoading: true,
  error: false
};

const hubsSlice = createSlice({
  name: 'hubs',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(getAllHubs.pending, (state) => {
      state.isLoading = true;
      state.error =  false
    })
    .addCase(getAllHubs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.hubsData = action.payload;
      state.error =  false
    })
    .addCase(getAllHubs.rejected, (state, action) => {
      state.isLoading = false;
      state.hubsData = [];
      state.error = true;
    })

    .addCase(getHubDataById.pending, (state) => {
      state.isLoading = true;
      state.error =  false
    })
    .addCase(getHubDataById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.hubDataById = action.payload;
      state.error =  false
    })
    .addCase(getHubDataById.rejected, (state, action) => {
      state.isLoading = false;
      state.hubDataById = [];
      state.error = true;
    })
  }
});

export default hubsSlice.reducer;
