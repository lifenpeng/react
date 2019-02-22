import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Todolist from './Todolist';
//import Anm from './Anm';
import Todoa from './Todoa';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Todoa />, document.getElementById('root'));

serviceWorker.unregister();
