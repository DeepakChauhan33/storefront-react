import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'


import { Provider } from 'react-redux';
import reducer from './Reducer/Reducer.jsx';
import { applyMiddleware, createStore } from 'redux';
import { thunk } from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk));

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <StrictMode>
        <App />
      </StrictMode>
    </Provider>
  </BrowserRouter>
)
