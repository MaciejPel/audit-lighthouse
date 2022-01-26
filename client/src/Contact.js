import React from 'react';
import Header from './Header';
import Footer from './Footer';
import bg from './images/bg.jpg';

export default function Contact() {
	document.title = 'Kontakt — Audyt Ads&Seo';
	return (
		<div className="App">
			<Header />
			<div id="landing" className="w-full bg-slate-200 flex justify-center" style={{ background: `url(${bg}) no-repeat center center fixed`, backgroundSize: 'cover', minHeight: '89vh' }}>
				<div id="landing-present" className="flex w-11/12 text-white 2xl:w-4/5 xl:w-4/5 lg:w-4/5 md:w-4/5 sm:w-5/5 flex-col lg:flex-row items-center lg:items-start gap-3 lg:gap-5">
					<div className="w-full lg:w-1/3 h-5/5 lg:h-3/4 flex flex-col justify-center">
						<h1 className="inline-block font-extrabold text-2xl md:text-4xl lg:text-6xl sm:text-3xl leading-none text-center lg:text-left">Kontakt</h1>
						<div className="inline-block font-thin text-xl text-center lg:text-left">
							<ul>
								<li>
									Infolinia:{' '}
									<strong className="font-semibold">
										<a className="hover:text-violet-400 transition" href="tel:226676404">
											22 667 64 04
										</a>
									</strong>
								</li>
								<li>
									Email:{' '}
									<strong className="font-semibold">
										<a className="hover:text-violet-400 transition" href="mailto:kontakt@adsandseo.pll">
											kontakt@adsandseo.pl
										</a>
									</strong>
								</li>
								<li>
									Adres: <strong className="font-semibold">ul. Energetyków 6, 64-100 Leszno</strong>
								</li>
							</ul>
						</div>
					</div>
					<div className="w-full lg:w-2/3 flex items-center justify-end mb-5">
						<iframe id="map" title="map" className="rounded-lg" width="100%" height="600" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=ul.%20Energetyk%C3%B3w%206,%2064-100%20Leszno+(ADS%20and%20SEO)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
