import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import {render} from 'react-dom';
import thunk from 'redux-thunk'
import Header from './components/Header'
import rootReducer from './reducers'
import Root from './components/Root'
import './index.css'

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
)

render(
    <Provider store={store}>
        <div>
            <Header />
            <Root />
        </div>
    </Provider>,
    document.getElementById('root')
)