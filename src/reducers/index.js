import Counter from './counter';
import LoggedIn from './login' ;
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter : Counter,
    logIn: LoggedIn
}) 

export default allReducers;