import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.css';
import "./styles/fonts.css";
import "./index.css";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from './App';
import Apply from './apply';

function RoutedApp(){
    return(
        <BrowserRouter>
            <Fragment>
                {/* <h1>Nav</h1> */}
                <Routes>
                    <Route exact path="/" element={<App />}>
                    </Route>
                </Routes>
                <Routes>
                    <Route exact path="/apply" element={<Apply />}>
                    </Route>
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}


ReactDOM.render(<RoutedApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA