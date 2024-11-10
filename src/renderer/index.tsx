import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../styles/tailwind.css';


const rootelement = document.getElementById('root');
if(rootelement) {
  const root = ReactDOM.createRoot(rootelement)

  root.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  )
}