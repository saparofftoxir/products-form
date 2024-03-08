import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Loader from './components/Loader.jsx'
import StateContextProvider from './context/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Suspense fallback={<Loader/>}>
    <StateContextProvider>
    <App />
    </StateContextProvider>
  </Suspense>
  </BrowserRouter>
)
