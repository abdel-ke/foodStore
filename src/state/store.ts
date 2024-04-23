import { configureStore } from "@reduxjs/toolkit";
import heartReducer from "./heart/heartSlice";
import itemsRducer from "./items/itemsSlice";
import typeSlice from "./type/typeSlice";

export const store = configureStore({
    reducer: {
        heart: heartReducer,
        AddedItems: itemsRducer,
        changeType: typeSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
