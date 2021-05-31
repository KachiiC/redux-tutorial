import React from 'react'
import { render } from "react-dom";
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import store from './app/store'

const root_element = document.getElementById('root')

render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    root_element
)