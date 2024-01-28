import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { productsReducer } from './reducers/productsReducer';
import { createStore, applyMiddleware} from "redux";
import { thunk } from "redux-thunk";
import { Provider } from "react-redux";

const store = createStore(productsReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

