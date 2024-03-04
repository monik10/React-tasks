/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserProvider from './Context/UserContext.jsx'
import AuthProvider from './Context/AuthContext.jsx'
import ModalProvider from './Context/ModalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(<AuthProvider><UserProvider><ModalProvider><App /></ModalProvider></UserProvider></AuthProvider>);
 

