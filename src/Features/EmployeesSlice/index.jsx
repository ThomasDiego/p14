import { createSlice } from '@reduxjs/toolkit'
import {statesUSA} from "../../Datas/index.jsx";

const initialState = {
    value: [],
}

export const EmployeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        addEmployee: (state, action) =>{
            const newId = state.value.length > 0 ? state.value[state.value.length - 1].id + 1 : 0;
            const stateAbbreviation = statesUSA.find(state => state.name === action.payload.state).abbreviation
            console.log({id: newId, ...action.payload, state: stateAbbreviation})
            state.value.push({id: newId, ...action.payload, state: stateAbbreviation})
        },
    },
})

export const { addEmployee } = EmployeesSlice.actions

export default EmployeesSlice.reducer