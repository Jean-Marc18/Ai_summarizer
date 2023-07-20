import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";

// store is a global state
export const store = configureStore({
    reducer: {
        // Is a part
        [articleApi.reducerPath]: articleApi.reducer
    },
    middleware: (GetDefaultMiddleware) => GetDefaultMiddleware().concat(articleApi.middleware)
})