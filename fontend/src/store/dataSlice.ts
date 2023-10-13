import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import User from '../Types/UserTypes'; // type for User

// fetchdata params
interface FetchDataParams {
  page: number;
}

// Define an async thunk to fetch data
export const fetchData = createAsyncThunk<User[], FetchDataParams>('data/fetchData', async ({page}) => {
  const response = await fetch(`https://react-fontend-express-server-assignment.vercel.app/api/users?page=${page}`);
  const data = await response.json();
  return data;
});

// Define the state type
interface DataState {
  data: User[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;
}

// Define the initial state and reducers
const initialState: DataState = {
  data: [],
  status: 'idle',
  error: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
