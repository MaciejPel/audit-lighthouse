const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');
const uuid = require('uuid');
const path = require('path');
const axios = require('axios');

exports.conductAnAudit = (req, res) => {
	const reportID = uuid.v4();
	let url = req.body.auditURL;
	testURLs = checkURL(url);

	if (testURLs === false) {
		res.status(400).send(JSON.stringify({ message: 'Nieprawidłowy adres URL' }));
		return false;
	}

	let requests = Object.values(JSON.parse(fs.readFileSync('./storage/requests.json')));
	let date = currentDate();
	requests.push({ date, reportID, url, testURLs });
	fs.writeFileSync('./storage/requests.json', JSON.stringify(requests));

	let currentQ = Object.values(JSON.parse(fs.readFileSync('./storage/queue.json')));
	currentQ.push([reportID, testURLs]);
	fs.writeFileSync('./storage/queue.json', JSON.stringify(currentQ));

	const interval = setInterval(() => {
		let newData = Object.values(JSON.parse(fs.readFileSync('./storage/queue.json')));
		if (newData[0][0] == reportID) {
			clearInterval(interval);
			const pleaseWork = (link) => {
				console.log(link);
				axios
					.get(link)
					.then((response) => {
						if (response.status >= 200 && response.status < 300) {
							if (response.data) {
								audit(link, reportID).then((result) => {
									if (result) {
										if (fs.existsSync(`./storage/${reportID}.html`)) {
											res.send(reportID);
											return;
										}
									} else {
										res.send({ message: 'Problem z związany LightHouse' });
										return;
									}
								});
							} else {
								clearQueueFirstElement(reportID);
								res.status(400).send(JSON.stringify({ message: 'Strona nie zawiera treści' }));
								return;
							}
						} else {
							clearQueueFirstElement(reportID);
							res.status(400).send(JSON.stringify({ message: 'Strona nie odpowiada' }));
							return;
						}
					})
					.catch((e) => {
						return e;
					})
					.finally(() => {
						return;
					});
				return;
			};
			try {
				console.log(1);
				pleaseWork(newData[0][1][0]);
			} catch (error) {
				console.log(error);
				try {
					console.log(2);
					pleaseWork(newData[0][1][1]);
				} catch (error2) {
					console.log(error2);
					res.status(400).send(JSON.stringify({ message: 'Coś poszło nie tak' }));
				}
			}
		}
	}, 1500);
};

exports.report = (req, res) => {
	res.sendFile(path.resolve('./storage' + `/${req.params.uid}.html`));
};

exports.test = (req, res) => {
	res.json({ 'testData:': '🚀🌚' });
};

const checkURL = (url) => {
	let splitByDot = url.split('.');
	let splitByDSlash = url.split('//');
	let testURLs = [];
	if (url.substr(0, 12) == 'https://www.' || url.substr(0, 11) == 'http://www.') {
		if (!splitByDot[2]) {
			return false;
		}
		testURLs = [url];
	} else if (url.substr(0, 8) == 'https://' || url.substr(0, 7) == 'http://') {
		if (!splitByDot[1]) {
			return false;
		}
		testURLs = [splitByDSlash[0] + '//www.' + splitByDSlash[1]];
	} else if (url.substr(0, 4) == 'www.') {
		if (!splitByDot[2]) {
			return false;
		}
		testURLs = ['https://' + url, 'http://' + url];
	} else {
		if (!splitByDot[1]) {
			return false;
		}
		testURLs = ['https://www.' + url, 'http://www.' + url];
	}
	return testURLs;
};

const audit = async (url, reportID) => {
	const chromeFlags = {
		chromeFlags: ['--headless', '--no-sandbox', '--no-first-run', '--disable-features=site-per-process'],
	};
	const chrome = await chromeLauncher.launch(chromeFlags);
	const runnerOptions = {
		output: 'html',
		port: chrome.port,
		locale: 'pl',
		onlyCategories: ['accessibility', 'best-practices', 'performance', 'pwa', 'seo'],
	};
	try {
		const runnerResult = await lighthouse(url, runnerOptions);
		fs.writeFileSync(`./storage/${reportID}.html`, runnerResult.report);
		await chrome.kill();
		clearQueueFirstElement(reportID);
		return true;
	} catch (e) {
		await chrome.kill();
		console.log(e.message);
		clearQueueFirstElement(reportID);
		return false;
	}
};

const currentDate = () => {
	var now = new Date();
	var formattedDate = now.getFullYear() + '-' + (now.getMonth() + 1 < 10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1) + '-' + (now.getDate() < 10 ? `0${now.getDate()}` : now.getDate()) + 'T' + (now.getHours() < 10 ? `0${now.getHours()}` : now.getHours()) + ':' + (now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes()) + ':' + (now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds()) + 'Z';
	return formattedDate;
};

const clearQueueFirstElement = (reportID) => {
	let currentQ = Object.values(JSON.parse(fs.readFileSync('./storage/queue.json')));
	if (currentQ[0] && currentQ[0][0]) {
		if (currentQ[0][0] == reportID) {
			currentQ.shift();
			fs.writeFileSync('./storage/queue.json', JSON.stringify(currentQ));
		}
	}
};

// /root/docs/server/storage/
// ./storage/
