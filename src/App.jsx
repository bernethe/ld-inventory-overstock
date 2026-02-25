import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import QueryPage from './components/pages/QueryPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = () => {
	return <Router>
		<Routes>
			<Route exact path='/' element={<QueryPage />} />
		</Routes>
	</Router>
}

export default App