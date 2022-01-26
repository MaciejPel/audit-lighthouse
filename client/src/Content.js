import React from 'react';

export default function Content(props) {
	const checkIcon = () => {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block" viewBox="0 0 20 20" fill="currentColor">
				<path
					fillRule="evenodd"
					d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clipRule="evenodd"
				/>
			</svg>
		);
	};
	return (
		<div className="flex justify-center mt-10 mb-16 md:mb-32">
			<div className={`flex justify-center w-11/12 xl:w-2/3 lg:w-11/12 md:w-11/12 text-white gap-y-16 md:gap-y-10 items-center gap-x-5 flex-col flex-wrap md:flex-row md:flex-nowrap ` + props.cstyle}>
				<div className="flex justify-center w-full md:w-1/2 flex-col text-center sm:text-left">
					<div className="sm:p-8 p-4 bg-indigo-700 rounded-lg  shadow-2xl shadow-violet-700 hover:shadow-violet-600 transition">
						<h2 className="block w-full text-4xl font-bold text-center sm:text-left">{props.header}</h2>
						{props.type === 'list' ? (
							<ul>
								{Array.from(props.text).map((item, index) => {
									return (
										<li className="mt-1" key={index}>
											{checkIcon()}
											{item}
										</li>
									);
								})}
							</ul>
						) : (
							<p>{props.text}</p>
						)}
					</div>
				</div>
				<div className={`w-full md:w-1/2 flex ` + props.istyle}>
					<img src={props.image} alt="" className="md:full max-h-96" />
				</div>
			</div>
		</div>
	);
}
