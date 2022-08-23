import React from 'react';
import dotenv from 'dotenv';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import { LoadProvider, ThemeProvider } from "./Context";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


import './index.scss';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
dotenv.config();


const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
        <BrowserRouter>
             <ThemeProvider>
                <LoadProvider>
                      <App/>
                </LoadProvider>
              </ThemeProvider>
      </BrowserRouter>
    </ApolloProvider>,
  document.getElementById('root')
);
serviceWorkerRegistration.register();
