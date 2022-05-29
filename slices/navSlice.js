import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCoordinates, getDuration } from '../api/streetAPI';


const initialState = {
    origin: null,
    destination: null,
    duration: null,
    travelTime: null,
};


export const fetchCoordinatesByAddress = createAsyncThunk('street/coordinates', async(street) => {
    const response = await getCoordinates('Россия' + street);
    return response;
})

export const fetchDurationBetweenTwoStreet = createAsyncThunk('street/duration', async (streets) => {
    const {from, to} = streets;
    const response = await getDuration('Россия' + from, 'Россия' + to);
    return response;
})

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        }, 
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTime: (state, action) => {
            state.travelTime = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCoordinatesByAddress.fulfilled, (state, action) => {
            state.origin = {
                latitude: action.payload[0].latLng.lat,
                longitude: action.payload[0].latLng.lng
            };
        })
            .addCase(fetchDurationBetweenTwoStreet.fulfilled, (state, action) => {
            state.duration = action.payload.route.legs[0].maneuvers.map( ({startPoint}) => {
                return {
                  'latitude': startPoint.lat,
                  'longitude': startPoint.lng
                }
              })
        })
    }
});

export const { setOrigin, setDestination, setTravelTime } = navSlice.actions; //all actions for reducers;
export default navSlice.reducer;

//Selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDuration = (state) => state.nav.duration;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTime = (state) => state.nav.travelTime;