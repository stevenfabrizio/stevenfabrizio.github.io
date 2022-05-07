import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

React.lazy(() => import('./images/SmallerMP3.png'));
React.lazy(() => import('./images/SmallerBOOT.png'));
React.lazy(() => import('./images/SmallerBTC.png'));
React.lazy(() => import('./images/SmallerSUD.png'));
React.lazy(() => import('./images/SmallerTIKI.jpg'));
React.lazy(() => import('./images/SmallerWEAT.png'));
React.lazy(() => import('./images/SmallerWIKI.png'));
require('./responsiveness.css');

require('./styles.css');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
