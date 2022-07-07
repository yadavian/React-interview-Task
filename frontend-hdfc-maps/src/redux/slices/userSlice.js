import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        location:[],
        visit:[],
        tab:false
    },
    //Reducers gives a function that changes the user state
    reducers: {
        setLogin: (state, action) => {
            console.log(state, action)
            state.user = action.payload
        },
        setLocation: (state, action) => {
            state.location = action.payload
        },
        setVisit: (state, action) => {
            state.visit = action.payload
        },
        setTab: (state, action) => {
            state.tab = action.payload
        },
        
    }
});

export const { setLogin, setLocation,setVisit,setTab } = userSlice.actions; 
export default userSlice.reducer;
