import { React, useEffect, useRef, useState } from 'react';

const Terminal = () => {
	const [input, setInput] = useState('');
	const [output, setOutput] = useState([]);

	const inputRef = useRef(null);

	useEffect(() => {
		document.addEventListener('click', () => {
			inputRef.current.focus();
		});
	}, []);

	useEffect(() => {
		const listener = () => {
			inputRef.current.focus();
		};
		document.addEventListener('click', listener);
		return () => {
			document.removeEventListener('click', listener);
		};
	}, []);

	const handleInput = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		if (e.key === 'Enter') {
			let command = input.trim().toLowerCase();

			let newOutput = <p>{input}</p>;

			switch (command) {
				case 'help':
					newOutput = <p>help: Shows available commands</p>;
					break;
				case 'about':
					newOutput = (
						<p>about: Shows information about the website</p>
					);
					break;
				case 'projects':
					newOutput = (
						<p>projects: Shows a list of current projects</p>
					);
					break;
				case 'team':
					newOutput = <p>team: Shows a list of team members</p>;
					break;
				default:
					newOutput = (
						<p>
							Invalid command. Type "help" for a list of commands
						</p>
					);
					break;
			}

			setOutput([...output, newOutput]);
			setInput('');
		}
	};

	return (
		<div className="bg-gray-900 text-white px-12">
			<div
				id="output"
				className="overflow-y-scroll scrollbar-hide pt-2.5"
			>
				{output.map((item, index) => {
					return <div key={index}>{item}</div>;
				})}
			</div>
			<div className="inline-block w-full">
				<span>guest@initial.dev:~$</span>
				<input
					className="border-0 pl-2.5 pt-2.5 bg-gray-900 text-white focus:ring-0 focus:outline-none"
					type="text"
					value={input}
					onChange={handleInput}
					onKeyPress={handleSubmit}
					ref={inputRef}
					autoFocus
				/>
			</div>
		</div>
	);
};

export default Terminal;
