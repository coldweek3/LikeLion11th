import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Router, RouterProvider } from 'react-router-dom'
import router from './Router.jsx'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ThemeProvider> */}
      {/* <App /> */}
      <RouterProvider router={router} />
    {/* </ThemeProvider> */}
  </React.StrictMode>,
);
