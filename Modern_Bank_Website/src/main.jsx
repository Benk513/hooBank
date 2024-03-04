import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import store from './store.js'

import { Provider } from 'react-redux'

// testing our dispatching functions 
store.dispatch({ type: "account/deposit", payload: 250 });
console.log(store.getState())


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />

    </Provider>
  </React.StrictMode>,
)
