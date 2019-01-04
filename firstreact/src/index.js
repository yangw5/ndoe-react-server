import React from 'react';
import ReactDOM from 'react-dom';
/*import App from './App';*/
import Router from './router/RouterMap'

/*import RouterMap from './router/routerMap';*/
import * as serviceWorker from './serviceWorker';
require('./common.css');

ReactDOM.render(<Router />, document.getElementById('root'));

serviceWorker.unregister();
