var urlModel = require('../models/url.js');

async function createUrl(data) {
  return new urlModel({
    long_url: data.long_url,
    short_url: data.short_url,
  }).save();
}

async function geturl(short_url) {
	console.log(short_url);
  return new urlModel({short_url:short_url}).fetch().then(url => {
    return JSON.stringify(url);
  });
}

module.exports = { createUrl, geturl};
