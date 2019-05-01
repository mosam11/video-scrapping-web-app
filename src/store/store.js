import {
    createStore
} from 'redux';
import rootReducer from './reducer';

let store = createStore(rootReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => {
    console.log("added")
})

export default store;