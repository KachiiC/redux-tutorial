import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./js/components/App";

const root_element = document.getElementById('root')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root_element
)

