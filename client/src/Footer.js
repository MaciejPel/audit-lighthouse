import React from 'react';
import { ReactComponent as Logo } from './images/logo.svg';
import { ReactComponent as FacebookLogo } from './images/facebook.svg';
import { ReactComponent as InstagramLogo } from './images/instagram.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<footer className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white pt-12 md:pb-24 pb-4">
			<div className="w-full flex justify-center">
				<div className="lg:w-8/12 w-10/12 flex flex-col">
					<div className="grid md:grid-cols-3 grid-cols-1 gap-2 md:gap-16">
						<div className="flex flex-col justify-center">
							<h2 className="font-black text-5xl md:text-4xl xl:text-6xl text-violet-400 text-center md:text-left">Audyt Ads&Seo</h2>
							<div className="flex justify-center md:justify-start gap-8 my-2 ">
								<a href="https://adsandseo.pl" rel="noreferrer" title="AdsAndSeo.pl" target="_blank">
									<Logo />
								</a>
								<a href="https://www.facebook.com/adsandseopl" rel="noreferrer" title="AdsAndSeo na Facebooku" target="_blank">
									<FacebookLogo />
								</a>
								<a href="https://www.instagram.com/adsandseo/" rel="noreferrer" title="AdsAndSeo na Instagramie" target="_blank">
									<InstagramLogo />
								</a>
							</div>
						</div>
						<div className="md:text-left text-center">
							<h5 className="text-violet-500 text-xl">Usługi</h5>
							<a href="https://adsandseo.pl/projektowanie-stron-www/" target="_blank" rel="noreferrer" className="block my-2 hover:underline">
								Tworzenie stron
							</a>
							<a href="https://adsandseo.pl/ pozycjonowanie-stron/" target="_blank" rel="noreferrer" className="block my-2 hover:underline">
								Pozycjonowanie stron
							</a>
							<a href="https://adsandseo.pl/2021/08/30/google-ads-2/" target="_blank" rel="noreferrer" className="block my-2 hover:underline">
								Google Ads
							</a>
							<a href="https://adsandseo.pl/prowadzenie-fan-page/" target="_blank" rel="noreferrer" className="block my-2 hover:underline">
								Prowadzenie FanPage
							</a>
							<a href="https://adsandseo.pl/teksty/" target="_blank" rel="noreferrer" className="block my-2 hover:underline">
								Teksty na stronę
							</a>
							<a href="https://adsandseo.pl/produkt/opieka-stron/" target="_blank" rel="noreferrer" className="block my-2 hover:underline">
								Opieka stron internetowych
							</a>
							<a href="https://adsandseo.pl/produkt/grafiki/" target="_blank" rel="noreferrer" className="block my-2 hover:underline">
								Grafiki na stronę
							</a>
							<a href="https://adsandseo.pl/produkt/backlinki/" target="_blank" rel="noreferrer" className="block my-2 hover:underline">
								Backlinki
							</a>
						</div>
						<div className="md:text-left text-center">
							<h5 className="text-violet-500 text-xl">Informacje</h5>
							<Link to="/" className="block my-2 hover:underline">
								Strona główna
							</Link>
							<Link to="/contact" className="block my-2 hover:underline">
								Kontakt
							</Link>
							<Link to="/stack" className="block my-2 hover:underline">
								Stack
							</Link>
						</div>
					</div>
					<hr className="w-full bg-white my-2" />
					<div className="flex justify-between items-center">
						<div>Copyright&copy; {new Date().getFullYear()}</div>
						<div className="flex items-center">
							<h2 className="text-lg md:text-2xl font-semibold">AdsandSeo.pl</h2>
							<Logo className="md:ml-2 ml-1" />
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
