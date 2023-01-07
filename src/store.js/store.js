import { configureStore } from '@reduxjs/toolkit';
import reducer from './postsSlice';

export const globalStore = configureStore({reducer: {postsReducer: reducer, }, });