import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBlogs = createAsyncThunk(
  'blogs/fetchBlogs',
  async () => {
    const response = await axios.get('YOUR_BLOGS_API_ENDPOINT');
    return response.data;
  }
);

const blogsSlice = createSlice({
  name: 'blogs',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default blogsSlice.reducer; 