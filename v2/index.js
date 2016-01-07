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
    analyse(body); // Show the HTML for the Google homepage.
  }else{
    console.log(err);
  }
})

var analyse = function (body){
    $ = cheerio.load(body);
    var item_lst = $('.cell .topic_title_wrapper .topic_title');
    var item_length = item_lst.length;
    console.log('item:' + item_length);
    for (var i = 0; i < item_length; i++) {
        var element = item_lst[i];
        var title = $(element).text().trim();
        console.log(title);
    }
}