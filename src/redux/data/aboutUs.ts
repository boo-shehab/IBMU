import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

// Async thunk to fetch data from Firebase
export const AboutUs = createAsyncThunk(
  'data/AboutUs',
  async () => {
    const querySnapshot = await getDocs(collection(db, 'aboutUs'));
    let data: any[] = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    
    return data[0];
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    aboutUsData: null,
    loading: false,
    error: null as string | null | undefined,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AboutUs.pending, (state) => {
        state.loading = true;
      })
      .addCase(AboutUs.fulfilled, (state, action) => {
        state.aboutUsData = action.payload;
        state.loading = false;
        state.error = null
      })
      .addCase(AboutUs.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default dataSlice.reducer;
