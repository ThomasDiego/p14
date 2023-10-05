import { configureStore } from '@reduxjs/toolkit'
import employeesReducer from '../Features/EmployeesSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk";
import {logger} from "redux-logger/src";

const employeesPersistConfig = {
    key: 'employees',
    storage,
}

const persistedEmployeesReducer = persistReducer(
    employeesPersistConfig,
    employeesReducer
)

export const store = configureStore({
    reducer: {
        employees: persistedEmployeesReducer,
    },
    middleware: [thunk]
})

export const persistor = persistStore(store)