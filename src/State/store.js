import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

import { productsApi } from "../APIs/productsAPI";
import { authApi } from "../APIs/authAPI";

import { setupListeners } from "@reduxjs/toolkit/dist/query";

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      authApi.middleware,
      productsApi.middleware
    ),
});

setupListeners(store.dispatch);

export default store;
