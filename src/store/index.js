import { persistReducer, persistStore } from "redux-persist";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './slices';

const persistConfig = {
    key: "root",
    version: 1,
    storage: AsyncStorage,
    blacklist: [""]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: false,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
})
export const persistor = persistStore(store);