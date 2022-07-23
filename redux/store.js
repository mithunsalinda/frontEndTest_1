//import { configureStore, applyMiddleware, createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import { userReducer } from "./reducers/createuser.reducer";
import rootReducer from "./reducers/index"

// initial states here
const initalState = {};

// middleware
const middleware = [thunk];

// creating store
export const store = configureStore({
    reducer: {
        userReducer: userReducer,

    },
    initalState,
});

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);