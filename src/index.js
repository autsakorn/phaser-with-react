import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './containers/App';
import registerServiceWorker from './registerServiceWorker';

// import 'framework7/dist/css/framework7.ios.min.css';
// import 'framework7/dist/css/framework7.ios.colors.min.css';

/* OR for Material Theme:*/
import 'framework7/dist/css/framework7.material.min.css'
import 'framework7/dist/css/framework7.material.colors.min.css'
/**/

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
