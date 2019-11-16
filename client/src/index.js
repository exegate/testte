/* React */
import React from 'react';
import ReactDOM from 'react-dom';

/* Components */
import App from './App';

/* Css */
import './assets/css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(

    <App />

, document.getElementById('root'));

serviceWorker.unregister();
