import { configureStore } from "@reduxjs/toolkit";
import favGameReducer from "./favGame/favGameSlice";

export const store = configureStore({
    reducer:{
        favorites: favGameReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;