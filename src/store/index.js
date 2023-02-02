import { configureStore } from '@reduxjs/toolkit';
import news from '../components/pages/mainNewsSlice';

const store = configureStore({
    reducer: {news},
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;