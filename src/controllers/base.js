var express = require('express');
var app = express();
var urlService = require('../services/url.js');

app.post('/', async (req, res, next) => {
	let data = {};
	let longurl = req.body;
	let random = Math.random().toString(36).substring(7);
	let host = req.get('host');
	let shorturl = req.protocol + '://'+host+"/"+random;
	data.long_url = longurl.url;
	data.short_url = shorturl;
	try {
		console.log(data);
		await urlService.createUrl(data);
		res.json({"url":shorturl});
	} catch (err) {
	    next(err);
	}
});

module.exports =  app;
