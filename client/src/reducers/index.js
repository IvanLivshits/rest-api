import {applyMiddleware, combineReducers, createStore } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import fileReducer from './fileReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    user: userReducer,
    file: fileReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));