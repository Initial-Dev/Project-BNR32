import { React, useEffect, useRef, useState } from 'react';

const Terminal = () => {
	const [input, setInput] = useState('');
	const [output, setOutput] = useState([]);

	const inputRef = useRef(null);
	const outputRef = useRef(null);

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
					newOutput = (
						<div>
							<br />
							<p>
								<span className="drop-shadow-cmd text-red-600">
									about
								</span>{' '}
								displays a short paragraph about what is
								InitialDev.
							</p>
							<br />
							<p>
								<span className="drop-shadow-cmd text-red-600">
									team
								</span>{' '}
								displays a profile of each of our dear team
								members.
							</p>
							<br />
							<p>
								<span className="drop-shadow-cmd text-red-600">
									contact
								</span>{' '}
								displays our email address so that you can
								directly contact us.
							</p>
							<br />
							<p>
								<span className="drop-shadow-cmd text-red-600">
									social
								</span>{' '}
								displays links to InitialDev's social accounts.
							</p>
							<br />
						</div>
					);
					break;
				case 'about':
					newOutput = (
						<p>about: Shows information about the website</p>
					);
					break;
				case 'team':
					newOutput = <p>team: Shows a list of team members</p>;
					break;
				case 'contact':
					newOutput = <p>contact: Shows contact information</p>;
					break;
				case 'social':
					newOutput = <p>social: Shows social media links</p>;
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
			setTimeout(() => {
				outputRef.current.lastChild.scrollIntoView({
					behavior: 'smooth',
				});
			}, 10);
		}
	};

	return (
		<div className="relative bg-gray-900 text-white px-12">
			<div
				id="output"
				className="max-h-[32rem] overflow-y-scroll overscroll-contain scrollbar-hide mt-2.5 w-full"
				ref={outputRef}
			>
				{output.map((item, index) => {
					return <div key={index}>{item}</div>;
				})}
			</div>
			<div className="inline-block w-full pt-2.5">
				<span>guest@initial.dev:~$</span>
				<input
					className="border-0 pl-2.5 w-auto bg-gray-900 text-white focus:ring-0 focus:outline-none"
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
