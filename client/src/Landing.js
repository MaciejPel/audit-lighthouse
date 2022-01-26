import React, { Suspense } from 'react';
import bg from './images/bg.jpg';
import Globe from './Globe';
import MakeAudit from './MakeAudit';

export default function Landing() {
	return (
		<div id="landing" className="w-full bg-slate-200 flex justify-center" style={{ background: `url(${bg}) no-repeat center center fixed`, backgroundSize: 'cover', minHeight: '82vh' }}>
			<div id="landing-present" className="flex w-11/12 text-white 2xl:w-3/5 xl:w-4/5 lg:w-4/5 md:w-4/5 sm:w-5/5 flex-col-reverse lg:flex-row items-center lg:items-start gap-3 lg:gap-0 mb-16">
				<div className="w-full lg:w-1/2 h-5/5 lg:h-3/4 flex flex-col justify-center">
					<h1 className="inline-block font-extrabold text-2xl md:text-4xl lg:text-6xl sm:text-3xl leading-none text-center lg:text-left">Sprawdź swoją stronę internetową</h1>
					<p className="inline-block font-thin text-xl text-center lg:text-left">
						Wykonaj bezpłatny audyt SEO 🔍
						<br />
						<span className="font-semibold text-center lg:text-left"> Tu i Teraz!</span>
					</p>
					<MakeAudit />
				</div>
				<div className="w-full lg:w-3/5 lg:h-3/4 h-3/5 flex items-center justify-end">
					<Suspense fallback={null}>
						<Globe />
					</Suspense>
				</div>
			</div>
		</div>
	);
}
