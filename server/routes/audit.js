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
		res.status(400).send(JSON.stringify({ error: 'Invalid URL: URL Test level' }));
		return;
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
			newData[0][1].every((test) => {
				axios.get(test).then((response) => {
					if (response.status >= 200 && response.status < 300 && response.data) {
						audit(test, reportID).then((result) => {
							if (result) {
								if (fs.existsSync(`./storage/${reportID}.html`)) {
									res.send(reportID);
								}
							} else {
								res.send({ error: 'Invalid URL: Lighthouse level' });
							}
						});
					}
				});
			});
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
		let currentQ = Object.values(JSON.parse(fs.readFileSync('./storage/queue.json')));
		if (currentQ[0][0] == reportID) {
			currentQ.shift();
			fs.writeFileSync('./storage/queue.json', JSON.stringify(currentQ));
			return true;
		}
	} catch (e) {
		await chrome.kill();
		let currentQ = Object.values(JSON.parse(fs.readFileSync('./storage/queue.json')));
		if (currentQ[0][0] == reportID) {
			currentQ.shift();
			fs.writeFileSync('./storage/queue.json', JSON.stringify(currentQ));
			return false;
		}
	}
};

const currentDate = () => {
	var now = new Date();
	var formatDate = now.getFullYear() + '-' + (now.getMonth() + 1 < 10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1) + '-' + now.getDate() + 'T' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds() + '.' + now.getMilliseconds() + 'Z';
	return formatDate;
};
// /root/docs/server/storage/
// ./storage/
