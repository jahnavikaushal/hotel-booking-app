/*
createSlice:
A function from Redux Toolkit to create a slice of the state.
Combines reducers and actions in one place, reducing boilerplate.

name:
Identifies the slice in the Redux state tree (here: rooms).

initialState:
The starting value for this piece of state.
Here, it’s an empty array, indicating no rooms are loaded initially.

reducers:
Defines how the state can be changed.
setRooms takes an action and directly replaces the state with the action's payload.

Exporting Actions:
Extracts the action creators from the slice to be used in the components.

Exporting Reducer:
The reducer is exported to be added to the Redux store.
*/

import { createSlice } from "@reduxjs/toolkit";

const roomSlice = createSlice({
    name: 'rooms',
    initialState: [],
    reducers: {
        setRooms: (state, action) => action.payload,
    },
});

export const { setRooms } = roomSlice.actions;
export default roomSlice.reducer;