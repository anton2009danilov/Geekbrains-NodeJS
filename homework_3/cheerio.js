const request = require('request');
const cheerio = require('cheerio');
request('https://yandex.ru/news/', function (error, response, html) {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        //  console.log(html)
        $('.news-card__title').each(function(i, element){
            console.log($(this).text());
        });
    } else {
        console.log(error, response.statusCode);
    }
});