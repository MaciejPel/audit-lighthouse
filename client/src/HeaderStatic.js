import React from 'react';
import logo from './images/logo.svg';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header className="relative flex justify-between my-0 mx-0 py-3 px-12 md:py-3 md:px-44 lg:px-44 transition-all bg-gradient-to-r to-header-blue from-purple-900 rounded-none md:from-header-blue md:to-purple-900">
			<Link style={{ width: '40px' }} to="/">
				<img src={logo} style={{ maxWidth: '40px', height: '40px' }} alt="" />
			</Link>
			<nav className="flex justify-between gap-3 items-center text-white font-semibold">
				<a className="hover:bg-blue-500 hover:shadow-md hover:shadow-blue-500/50 transition-all px-2 py-2 rounded-md" rel="noreferrer" href="https://adsandseo.pl/" target="_blank">
					Ads&Seo
				</a>
				<Link className="hover:bg-blue-500 hover:shadow-md hover:shadow-blue-500/50 transition-all px-2 py-2 rounded-md " to="/stack">
					Stack
				</Link>
				<Link className="hover:bg-pink-500 hover:shadow-md hover:shadow-pink-500/50 transition-all px-2 py-2 rounded-md" to="/contact">
					Kontakt
				</Link>
			</nav>
		</header>
	);
}
