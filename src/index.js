import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import { LoadProvider } from './Context/loading';
import dotenv from 'dotenv';
import { ApolloProvider } from '@apollo/client';
import { PostProvider } from './Context/post';
import { createApolloClient } from './Utils/apollo_client';


import './index.scss';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

dotenv.config("../.env");
// GraphQL HTTP URL
const API_URL = process.env.REACT_APP_API_URL;


// GraphQL WebSocket (subscriptions) URL.
// If its url is not set in .env then it has same url, host and pathname
const WEBSOCKET_API_URL = process.env.REACT_APP_WEBSOCKET_API_URL;
const websocketApiUrl = WEBSOCKET_API_URL
  ? WEBSOCKET_API_URL
  : API_URL.replace('https://', 'ws://').replace('http://', 'ws://');

const apolloClient = createApolloClient(API_URL, websocketApiUrl);


ReactDOM.render(
      <ApolloProvider client={apolloClient}>
        <BrowserRouter>
                <LoadProvider>
                  <PostProvider>
                      <App/>
                  </PostProvider>
                </LoadProvider>
      </BrowserRouter>
    </ApolloProvider>,
  document.getElementById('root')
);
serviceWorkerRegistration.register();

