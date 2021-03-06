import {combineReducers} from 'redux';
import productsReducer from './productsReducer';
import alertReducer from './alertReducer';

//cada reducer va a tener su state
export default combineReducers({
    products: productsReducer,
    alert: alertReducer
});