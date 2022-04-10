import {createStore, applyMiddleware, combineReducers, compose} from "redux";
import logger from 'redux-logger'
import rootReducers from './reducers'

const configureStore = (reducers = {}, preLoadedState = {}) => createStore(
    combineReducers({...rootReducers}),
    preLoadedState,
    compose(
        applyMiddleware(
            // logger,
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export const store = configureStore()


