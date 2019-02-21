import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Todolist from './Todolist';
import Anm from './Anm';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Anm />, document.getElementById('root'));

serviceWorker.unregister();
