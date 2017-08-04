import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

import WebFontLoader from 'webfontloader';

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
