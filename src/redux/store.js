import { configureStore } from '@reduxjs/toolkit';
import Headquarter from './data/Headquarter';
import branches from './data/branches';
import aboutUs from './data/aboutUs';

const store = configureStore({
  reducer: {
    headquarter: Headquarter,
    branches: branches,
    aboutUs: aboutUs,
  },
});

export default store;
