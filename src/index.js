import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductProvider } from './context';
import './index.css';
import App from './App';
import Layout from './components/layout';
import { Provider } from 'react-redux';
import AppWrapper from './AppWrapper';

ReactDOM.render(
  <React.StrictMode>
    
    <App />
   
  </React.StrictMode>,
  document.getElementById('root')
);



