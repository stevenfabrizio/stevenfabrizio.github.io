import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

React.lazy(() => import('./images/smallerMP3.png'));
React.lazy(() => import('./images/smallerBOOT.png'));
React.lazy(() => import('./images/smallerBTC.png'));
React.lazy(() => import('./images/smallerSUD.png'));
React.lazy(() => import('./images/smallerTIKI.jpg'));
React.lazy(() => import('./images/smallerWEAT.png'));
React.lazy(() => import('./images/smallerWIKI.png'));

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
