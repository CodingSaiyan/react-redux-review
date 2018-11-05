import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import store from './store'

//In order to make sure that we have access to our store in our application, we must wrap our top level component in the Provider component given to us by react-redux.
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
// registerServiceWorker();
