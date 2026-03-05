import { configureStore} from "@reduxjs/toolkit";
import storage from "redux-persist/es/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import ActiveTabReducer from "./ActiveTabSlice";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["activeTab"],
};

const rootReducer = combineReducers({
    activeTab: ActiveTabReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export const persistor = persistStore(store);