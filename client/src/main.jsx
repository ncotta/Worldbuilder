import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { RefreshProvider } from './contexts/RefreshContext';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RefreshProvider>
			<BrowserRouter>
				<App /> 
			</BrowserRouter>
		</RefreshProvider>
	</React.StrictMode>,
)
