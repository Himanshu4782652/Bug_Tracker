import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name:"user",
    initialState:[{}],
    reducers:{
        getUser:(state) => {
            state.push({name:"Himanshu Srivastav"})
            state.push({name:"Prince Parihar"})
        }
    }
})

export default slice.reducer;

export const{getUser} = slice.actions;