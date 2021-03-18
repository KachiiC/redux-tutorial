import counterReducer from './counter'
import loggedReducer from './isLogged'
import modalReducer from './modal_reducers'
import {combineReducers} from 'redux'

const allReducers = combineReducers ({
    counter: counterReducer,
    isLogged: loggedReducer,
    modal: modalReducer
})


export default allReducers