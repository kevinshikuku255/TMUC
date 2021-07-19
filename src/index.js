import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import { LoadProvider } from './Context/loading';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <LoadProvider>
           <App />
    </LoadProvider>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorkerRegistration.register();

