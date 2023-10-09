import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'

import AuthProvider from './Providers/AuthProvider'
import Routes from './Components/Routes'


ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider><RouterProvider router={Routes}></RouterProvider></AuthProvider>
)
