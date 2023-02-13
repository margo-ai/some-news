import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';

import store from './store';
import { Provider } from 'react-redux';

import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
	* {
		font-family: 'Playfair Display', serif;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	a {
	text-decoration: none;
	color: #000;
	}

	.App {
		
	}
`;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<Global/>
		<App />
	</Provider> 
);
