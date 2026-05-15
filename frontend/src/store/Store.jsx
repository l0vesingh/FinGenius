import {configureStore} from "@reduxjs/toolkit"
import {persistStore,persistReducer,FLUSH,REGISTER,REHYDRATE,PAUSE,PERSIST,PURGE} from "redux-persist"
import storage from "redux-persist/lib/storage"
import states from "./reducers/States"

const persistConfig ={
    key:"root",
    version:1,
    storage
};

const persistedReducer = persistReducer(persistConfig,states);

export const store = configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck:{
                ignoreActions : [FLUSH,REGISTER,REHYDRATE,PAUSE,PERSIST,PURGE],
            }
        })
})

export const persistor = persistStore(store)