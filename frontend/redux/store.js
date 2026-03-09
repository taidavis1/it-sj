import { configureStore} from "@reduxjs/toolkit";
import storage from "redux-persist/es/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import ActiveTabReducer from "./ActiveTabSlice";
import ActiveLangReducer from "./ActiveLangSlice";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["activeTab"],
};

const rootReducer = combineReducers({
    activeTab: ActiveTabReducer,
    activeLang: ActiveLangReducer,
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