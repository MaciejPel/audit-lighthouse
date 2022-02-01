import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import HeaderStatic from './HeaderStatic';

export default function Report() {
	document.title = 'Raport - Ads&Seo';
	let navigate = useNavigate();

	useEffect(() => {
		const uid = window.location.pathname.split('/').pop();
		if (uid) {
			axios
				.get(`http://localhost:8000/report/${uid}`)
				.then(function (res) {
					var iframe = document.createElement('iframe');
					var html = res.data;
					document.querySelector('.row').appendChild(iframe);
					iframe.height = '100%';
					iframe.id = 'audit-result';
					iframe.contentWindow.document.open();
					iframe.contentWindow.document.write(html);
					iframe.contentWindow.document.close();
					// iframe.setAttribute('scrolling', 'no');
					// document.getElementsByClassName('row')[0].style.height = iframe.contentWindow.document.documentElement.scrollHeight + 1000 + 'px';
					console.clear();
				})
				.catch(function (error) {
					navigate('/');
				});
		} else {
			navigate('/');
		}
	}, []);

	return (
		<div className="App">
			<HeaderStatic />
			<div className="row">{/* inject iframe */}</div>
			{/* <Footer /> */}
		</div>
	);
}
