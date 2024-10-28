import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "Login",
    initialState:{
        logged: JSON.parse(localStorage.getItem("user")) || null,
    },
    reducers:{
        loggedInUser :(state,action )=>{
              state.logged = action.payload;  
        },
        loggedOutUser:(state)=>{
            state.logged = null; 
        },

    },
})

export const { loggedInUser,loggedOutUser} = userSlice.actions;
export default userSlice.reducer;