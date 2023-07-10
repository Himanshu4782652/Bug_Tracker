import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import {configureStore,combineReducers} from '@reduxjs/toolkit'
import App from '/App';

//reducers
import authReducer from '/Controllers/redux/authSlice'
import bugReducer from '/Controllers/redux/bugSlice'
import userReducer from '/Controllers/redux/userSlice'

//redux configure
const reducer = combineReducers({
    auth:authReducer,
    bugs:bugReducer,
    user:userReducer,
})

const store = configureStore({
    reducer
})

ReactDOM.render(
    <Provider store = {store} >
        <App/>
    </Provider>,
    document.getElementById('root')
    );
