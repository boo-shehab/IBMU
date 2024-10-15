import { configureStore } from '@reduxjs/toolkit';
import Headquarter from './data/Headquarter.ts';
import branches from './data/branches.ts';
import aboutUs from './data/aboutUs.ts';

const store = configureStore({
  reducer: {
    headquarter: Headquarter,
    branches: branches,
    aboutUs: aboutUs,
  },
});

export default store;
