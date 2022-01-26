import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function MakeAudit() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	let navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		let str = e.target[0].value;
		var body = {
			auditURL: str,
		};
		setLoading(true);
		axios
			.post(`http://localhost:8000/audit`, body)
			.then(function (res) {
				setLoading(false);
				navigate(`/report/${res.data}`);
			})
			.catch(function (error) {
				setError(true);
				setLoading(false);
			});
	};
	return (
		<>
			<form autoComplete="off" onSubmit={handleSubmit} className="flex justify-center items-center flex-col lg:items-start mt-2">
				<input id="input-domain" disabled={loading ? true : false} type="text" name="data" spellCheck={false} className={'px-3 py-3 font-semibold bg-white text-black rounded text-sm border-0 shadow outline-none w-80 text-center'} />
				{error ? <div className="error bg-rose-700 text-white-600 px-8 py-2 my-2 text-center rounded font-semibold hover:bg-rose-600 transition">Nieprawidłowy adres URL</div> : <div className="h-3.5"></div>}
				{loading ? (
					<button type="button" className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed" disabled="">
						<svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
							<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
							<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
						</svg>
						Przetwarzanie...
					</button>
				) : (
					<button className="text-white shadow bg-indigo-500 hover:bg-indigo-400 font-semibold rounded-md text-sm px-4 py-2 text-center transition ease-in-out duration-150 leading-6">{error ? 'Spróbuj ponownie' : 'Sprawdź teraz!'}</button>
				)}
			</form>
		</>
	);
}
