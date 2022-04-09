import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

/* Main Compnent */
import '@Admin/Settings.scss';
import Container from '@Admin/components/Container';

ReactDOM.render(
	<BrowserRouter>
		<Container />
	</BrowserRouter>,
	document.getElementById( 'wp-bess-settings' )
);
