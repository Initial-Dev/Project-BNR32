import React from 'react';
import Header from './components/Header';
import Terminal from './components/Terminal';

const App = () => {
	return (
		<div className="font-mono h-screen w-screen bg-gray-900 text-gray-100">
			<Header />
			<Terminal />
		</div>
	);
};

export default App;
