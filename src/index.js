import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let baseUrl = "http://pokeapi.salestock.net/api/v2";

ReactDOM.render(<App baseUrl={baseUrl}/>, document.getElementById('root'));
registerServiceWorker();
