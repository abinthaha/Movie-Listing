import React from 'react';
import ReactDOM from 'react-dom';
import Root from './app'
import store from './app/store';

ReactDOM.render(
    <Root store={store} />, document.getElementById('app')
);
