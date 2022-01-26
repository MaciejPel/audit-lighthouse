import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { ReactComponent as ReactLogo } from './images/react.svg';
import { ReactComponent as LighthouseLogo } from './images/lighthouse.svg';
import { ReactComponent as TailwindLogo } from './images/tailwind.svg';
import bg from './images/bg.jpg';

export default function Stack() {
	document.title = 'Stack — Audyt Ads&Seo';
	return (
		<div className="App">
			<Header />
			<div id="landing" className="w-full bg-slate-200 flex justify-center" style={{ background: `url(${bg}) no-repeat center center fixed`, backgroundSize: 'cover', minHeight: '82vh' }}>
				<div className="min-h-screen mb-8">
					<div className="flex justify-center mt-12 md:mt-40 mb-16">
						<div className="w-10/12 xl:w-3/5 lg:w-4/5 md:w-11/12 flex gap-12 md:gap-20 md:flex-row flex-col text-slate-800">
							<div className="w-full md:w-2/3 bg-cyan-400 shadow-2xl shadow-cyan-600 hover:shadow-cyan-400 transition p-3 md:p-12 rounded-md 2xl:text-3xl xl:text-2xl lg:text-xl text-xl flex items-center">
								<h1 className="font-bold text-center md:text-left ">
									Strona została zbudowana na popularnej bibliotece języka JavaScript-&nbsp;
									<a href="https://reactjs.org/" rel="noreferrer" target="_blank" className="font-extrabold underline">
										React
									</a>
								</h1>
							</div>
							<div className="w-full md:w-1/3 bg-cyan-400 shadow-2xl hover:shadow-cyan-400 transition shadow-cyan-600 p-6 rounded-md">
								<a href="https://reactjs.org/" rel="noreferrer" target="_blank">
									<ReactLogo />
								</a>
							</div>
						</div>
					</div>
					<div className="flex justify-center mt-10 mb-16">
						<div className="w-10/12 xl:w-3/5 lg:w-4/5 md:w-11/12 flex gap-12 md:gap-20 md:flex-row-reverse flex-col text-slate-800">
							<div className="w-full md:w-2/3 bg-orange-400 shadow-2xl shadow-orange-600 hover:shadow-orange-400 transition p-3 md:p-12 rounded-md 2xl:text-3xl xl:text-2xl lg:text-xl text-xl flex items-center">
								<h1 className="font-bold text-center md:text-right">
									Główna funkcja opiera się na narzędziu Google dla deweloperów-&nbsp;
									<a href="https://developers.google.com/web/tools/lighthouse/" rel="noreferrer" target="_blank" className="font-extrabold underline">
										LightHouse
									</a>
								</h1>
							</div>
							<div className="w-full md:w-1/3 bg-orange-400 shadow-2xl hover:shadow-orange-400 transition shadow-orange-600 p-6 rounded-md items-center">
								<a href="https://developers.google.com/web/tools/lighthouse/" rel="noreferrer" target="_blank">
									<LighthouseLogo />
								</a>
							</div>
						</div>
					</div>
					<div className="flex justify-center mt-10 mb-16">
						<div className="w-10/12 xl:w-3/5 lg:w-4/5 md:w-11/12 flex gap-12 md:gap-20 md:flex-row flex-col text-slate-800">
							<div className="w-full md:w-2/3 bg-emerald-300 shadow-2xl shadow-emerald-600 hover:shadow-emerald-400 transition p-3 md:p-12 rounded-md 2xl:text-3xl xl:text-2xl lg:text-xl text-xl flex items-center">
								<h1 className="font-bold text-center md:text-left">
									Przyjemną dla oka oprawę i wydajny układ zapewnia framework CSS niskiego poziomu-&nbsp;
									<a href="https://tailwindcss.com/" rel="noreferrer" target="_blank" className="font-extrabold underline">
										tailwind
									</a>
								</h1>
							</div>
							<div className="w-full md:w-1/3 bg-emerald-300 shadow-2xl hover:shadow-emerald-400 transition shadow-emerald-600 p-6 rounded-md items-center">
								<a href="https://tailwindcss.com/" rel="noreferrer" target="_blank">
									<TailwindLogo />
								</a>
							</div>
						</div>
					</div>
					<div className="flex justify-center mt-10 mb-16">
						<div className="w-10/12 xl:w-1/2 lg:w-1/2 md:w-11/12 flex gap-20 text-slate-800">
							<div className="w-full bg-pink-400 shadow-2xl shadow-pink-500 hover:shadow-pink-600 transition p-3 md:p-12 rounded-md text-3xl">
								<h1 className="block">Użyte zasoby:</h1>
								<ul className="list-disc pl-6 md:pl-12 text-base md:text-xl">
									<li>
										<h1>
											Grafika&nbsp;
											<a href="https://www.freepik.com/free-photo/outer-space-background_4246756.htm?fbclid=IwAR0Iq4EL4ye7USOERYND7P5cJ-VfP2Mo_QlG6E7oZyK0Lo_d-2fHOkNA6gg#query=space%20abstract&position=12&from_view=search" rel="noreferrer" target="_blank" className="font-extrabold italic">
												<code>`Outer space`</code>
											</a>
										</h1>
									</li>
									<li>
										<h1>
											Grafiki globu&nbsp;
											<a href="https://react-globe.netlify.app/" rel="noreferrer" target="_blank" className="font-extrabold italic">
												React Globe
											</a>
											,&nbsp;
											<a href="https://www.nasa.gov/topics/earth/images/index.html/" rel="noreferrer" target="_blank" className="font-extrabold italic">
												NASA
											</a>
										</h1>
									</li>
									<li>
										<h1>
											Glob&nbsp;
											<a href="https://react-globe.netlify.app/" rel="noreferrer" target="_blank" className="font-extrabold italic">
												React Globe
											</a>
											,&nbsp;
											<a href="https://threejs.org/" rel="noreferrer" target="_blank" className="font-extrabold italic">
												Three.js
											</a>
										</h1>
									</li>
								</ul>
								<div className="text-sm md:text-left text-center">Strona nie przechowuje danych użytkowników. Przechowywane są ogólne statystyki częstotliwości wyszukiwań fraz i adresów internetowych</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
