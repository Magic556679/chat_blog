import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { store } from './store/store.ts'
import { Provider } from 'react-redux'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import '@/assets/style/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
