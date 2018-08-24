//console.log('app.js is running');
import React from 'react';
import ReactDOM from 'react-dom';
import DecisionMakerApp from './components/DecisionMakerApp.js';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<DecisionMakerApp />, document.getElementById('app'));
