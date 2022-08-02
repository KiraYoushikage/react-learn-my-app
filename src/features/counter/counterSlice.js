import { createSlice } from "@reduxjs/toolkit";

const initialState={
    size : 0,
    sum: 0   

}

export const counterSlice= createSlice({
    name:"counter",
    initialState,

    reducers : {
        updateSize:(state,action)=>{
            // console.log("updateSize" ,state ,action)
            state.size=action.payload
        },

        updateSum:(state,action)=>{
            console.log("updateSum",state,action)
            state.sum+=action.payload
        }

    }

})
export const {updateSize,updateSum}=counterSlice.actions;
export default counterSlice.reducer;