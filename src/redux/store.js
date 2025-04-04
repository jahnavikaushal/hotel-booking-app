/* The store.js file in our React-Redux hotel web app is crucial because it sets up the global state management. By configuring the Redux store here,
we centralize the application's state, allowing different components to access and update shared data efficiently.
This approach enables seamless data flow and state synchronization across various parts of the app, such as room availability,
user information, and booking status, making the application more scalable and maintainable */

/* The configureStore function from Redux Toolkit is used to create a Redux store with some built-in best practices and configurations. 
It simplifies setting up the store compared to the traditional Redux createStore method.
*/

import { configureStore } from "@reduxjs/toolkit";
import roomReducer from '../features/rooms/roomSlice';

export const store = configureStore({
    reducer: {
        rooms: roomReducer,
    }
});

