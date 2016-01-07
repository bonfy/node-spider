var request = require('request');
var cheerio = require('cheerio');

//var proxy = 'http:/usr:pwd@yousite.com:port';
var target_url = 'https://cnodejs.org/';

console.log('start to visit ' + target_url);

request({
    url: target_url,
    method: 'GET',
    //proxy: proxy,
}, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body); // Show the HTML for the Google homepage.
  }else{
    console.log(err);
  }
})
