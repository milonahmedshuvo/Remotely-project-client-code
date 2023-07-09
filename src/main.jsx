import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FullAppContext from './Components/Sheared/Context/FullAppContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FullAppContext>
       <App />
    </FullAppContext>
  </React.StrictMode>,
)
