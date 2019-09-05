import React from 'react';
import {render} from 'react-dom';
import Generation from './components/Generation'
import Dragon from './components/Dragon'
import Header from './components/Header'

import './index.css'

render(
    <div>
        <Header />
        <Generation />
        <Dragon />
    </div>,
    document.getElementById('root')
)