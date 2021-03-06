import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App"
import { todoApp } from './reducers/todo';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

let store = createStore(todoApp);


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById("root"));