var baseController = require('./src/controllers/base.js');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var mysql      = require('mysql');
var urlService = require('./src/services/url.js');

app.use(jsonParser);

app.get('/:string',  async (req, res, next) => {
	let Url = req.protocol + '://' + req.get('host') + req.originalUrl;
	try {
		let url = JSON.parse(await urlService.geturl(Url));
		console.log(url.long_url);
		res.redirect(url.long_url);
	} catch (err) {
	    next(err);
	}
});

app.get('/healthcheck',  (req, res) => {
  let response = {};
  response.msg = `Running fine as of Time: ${Date.now()}`;
  res.send(response);
});

app.get('/',  (req, res) => {
  res.send("Hello world");
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

app.use('/shorturl', baseController);