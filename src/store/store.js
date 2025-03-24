import { configureStore } from "@reduxjs/toolkit";

import patternsReducer from './patternsSlice'

export const store = configureStore({
    reducer: {
        patterns: patternsReducer
    }
})