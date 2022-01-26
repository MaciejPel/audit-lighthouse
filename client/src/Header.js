import React from 'react';
import logo from './images/logo.svg';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header className="relative flex justify-between my-0 mb-10 mx-0 py-3 px-12 md:my-10 md:mx-32 md:py-3 md:px-10 md:rounded-full lg:mx-44 lg:px-12 transition-all bg-gradient-to-r to-header-blue from-purple-900 rounded-none md:from-header-blue md:to-purple-900 rounded-b-xl">
			<Link style={{ width: '40px' }} to="/">
				<img src={logo} className="hover:animate-pulse" style={{ maxWidth: '40px', height: '40px' }} alt="" />
			</Link>
			<nav className="flex justify-between gap-3 items-center text-white font-semibold">
				<a className="hover:bg-blue-500 hover:shadow-md hover:shadow-blue-500/50 transition-all px-2 py-2 rounded-md" rel="noreferrer" href="https://adsandseo.pl/" target="_blank">
					Ads&Seo
				</a>
				<Link className="hover:bg-blue-500 hover:shadow-md hover:shadow-blue-500/50 transition-all px-2 py-2 rounded-md " to="/stack">
					Stack
				</Link>
				<Link className="hover:bg-blue-500 hover:shadow-md hover:shadow-blue-500/50 transition-all px-2 py-2 rounded-md " to="/contact">
					Kontakt
				</Link>
			</nav>
		</header>
	);
}
