import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'; //permite usar func async
import reducer from './reducers/index';

const store = createStore(
   reducer,
   compose(applyMiddleware(thunk), //necesario porque utilizamos thunk
   typeof window === 'object' && 
    window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? //detecta la extension de chrome
    window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
   ) 
);

export default store; 