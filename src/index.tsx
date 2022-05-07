import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

require('./images/SmallerMP3.png');
require('./images/SmallerBOOT.png');
require('./images/SmallerBTC.png');
require('./images/SmallerSUD.png');
require('./images/SmallerTIKI.jpg');
require('./images/SmallerWEAT.png');
require('./images/SmallerWIKI.png');

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
