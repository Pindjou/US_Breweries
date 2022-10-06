import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import reducers from './reducers';
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from 'redux';
const store=createStore(reducers);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider  store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

