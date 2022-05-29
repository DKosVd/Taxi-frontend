import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    user: null,
    error: null
};



export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        }, 
        setError: (state, action) => {
            state.error = action.payload;
        }, 
    },
});

export const { setUser, setError } = authSlice.actions; //all actions for reducers;
export default authSlice.reducer;

//Selectors
export const selectUser = (state) => state.auth.user;
export const selectError = (state) => state.auth.error;