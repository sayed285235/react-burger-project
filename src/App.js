import React from "react";
import reactDom from "react-dom";
import "./App.css";
import Main from "./components/Main.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";





function App() {
    return (
        <div>
            <Provider store={store}>
                <BrowserRouter>
                    <Main />
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
