import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import firebaseConfig from './assets/Db/Firebase.jsx'
import { Provider } from 'react-redux'
import store from './Features/Stor.jsx'


createRoot(document.getElementById('root')).render(
  <Provider  store={store} >
   
   <App />
   
  
  </Provider>
)
