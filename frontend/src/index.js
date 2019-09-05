import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import {render} from 'react-dom';
import thunk from 'redux-thunk'
import Generation from './components/Generation'
import Dragon from './components/Dragon'
import Header from './components/Header'
import rootReducer from './reducers'
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
            <Generation />
            <Dragon />
         </div>
    </Provider>,
    document.getElementById('root')
)