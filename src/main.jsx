import React from 'react'
import ReactDOM from 'react-dom/client'
import {Toaster} from 'react-hot-toast';
import App from './App.jsx'
import './index.css'
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from './authConfig';
import {MsalProvider} from '@azure/msal-react';
import { AuthProvider } from './Components/UseAuth';


const msalInstance = new PublicClientApplication(msalConfig);

ReactDOM.createRoot(document.getElementById('root')).render( 
  <React.StrictMode>
    <MsalProvider instance = {msalInstance}>
      <AuthProvider>
    <Toaster />
    <App />
    </AuthProvider>
    </MsalProvider>
  </React.StrictMode>,
)
