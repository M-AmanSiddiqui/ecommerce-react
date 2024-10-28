import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import React from 'react'
import './index.css'
import { store } from "./redux/store.jsx"
import { Provider } from "react-redux";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Provider store={store}>
    
    <App />
    </Provider>
      
    
  </React.StrictMode>,
)






