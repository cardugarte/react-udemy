import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import "./styles.css";

// import { Home } from "./Home";
import { CounterApp } from './CounterApp';

const App = () => {
  return(
    // <Home />
    < CounterApp
      value={ 500 }
    />
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)