import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

// Async thunk to fetch data from Firebase
export const Branches = createAsyncThunk(
  'data/Branches',
  async () => {
    const querySnapshot = await getDocs(collection(db, 'branches'));
    let data: any[] = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    return data;
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    branches: [] as any,
    loading: false,
    error: null as string | null | undefined,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Branches.pending, (state) => {
        state.loading = true;
      })
      .addCase(Branches.fulfilled, (state, action) => {
        state.branches = action.payload;
        state.loading = false;
        state.error = null
      })
      .addCase(Branches.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default dataSlice.reducer;
