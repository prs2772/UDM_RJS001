import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { CounterApp } from './CounterApp';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<HelloWorldApp />*/}
    {/*<App username={'123'} description={'MIB Agent'} />*/}
    <CounterApp value={20}/>
  </React.StrictMode>
);
