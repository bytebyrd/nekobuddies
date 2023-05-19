import React from "react";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { robotReducer, searchFieldReducer } from "./reducers/reducer";
import App from './containers/App';
import './index.css';



const store = configureStore({
    reducer: {
        searchField: searchFieldReducer,
        robots: robotReducer
    }
})
//Render App
createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);