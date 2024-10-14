import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

// Async thunk to fetch data from Firebase
export const Headquarter = createAsyncThunk(
  'data/Headquarter',
  async () => {
    const querySnapshot = await getDocs(collection(db, 'Headquarter'));
    let data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    return data[0];
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    headquarterData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Headquarter.pending, (state) => {
        state.loading = true;
      })
      .addCase(Headquarter.fulfilled, (state, action) => {
        state.headquarterData = action.payload;
        state.loading = false;
      })
      .addCase(Headquarter.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default dataSlice.reducer;
