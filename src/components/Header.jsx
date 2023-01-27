import React from 'react';

const Header = () => {
	const art = `
     /***
     *       __ _____         _  _    _         _ ______                   ____   
     *      / /|_   _|       (_)| |  (_)       | ||  _  \\                 / /\\ \\  
     *     / /   | |   _ __   _ | |_  _   __ _ | || | | |  ___ __   __   / /  \\ \\ 
     *    < <    | |  | '_ \\ | || __|| | / _\` || || | | | / _ \\\\ \\ / /  / /    > >
     *     \\ \\  _| |_ | | | || || |_ | || (_| || || |/ / |  __/ \\ V /  / /    / / 
     *      \\_\\ \\___/ |_| |_||_| \\__||_| \\__,_||_||___/   \\___|  \\_/  /_/    /_/  
     *                                                                   © 2023
     * 
     *      This Website is a work in progress. Please check back later for updates.      
     *      For now, you can enjoy this terminal.
     * 
     *      Type 'help' for a list of commands.
     */`;
	return (
		<div className="self-center">
			<pre
				className="text-gray-100 text-left"
				dangerouslySetInnerHTML={{ __html: art }}
			/>
		</div>
	);
};

export default Header;
