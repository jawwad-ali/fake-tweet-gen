import { configureStore } from "@reduxjs/toolkit";

import tweetReducer from "@/slices/tweetSlices"

export const store = configureStore({
    reducer: {
        tweet: tweetReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch