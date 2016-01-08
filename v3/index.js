var rp = require('request-promise');
var cheerio = require('cheerio');

//var proxy = 'http:/usr:pwd@yousite.com:port';
var target_url = 'https://cnodejs.org/';

console.log('start to visit ' + target_url);

var options = {
    uri: target_url,
    method: 'GET',
    //proxy: proxy,
    transform: function (body) {
        return body;
    }
};

rp(options)
    .then(function (body) {
        // Process html like you would with jQuery...
        analyse(body);
    })
    .catch(function (err) {
        // Crawling failed or Cheerio choked...
        console.log(err);
    });
    
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