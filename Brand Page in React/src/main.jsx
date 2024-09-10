//import react component
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
//this is getting imported globally
import './index.css'

//components are rendered from here
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
