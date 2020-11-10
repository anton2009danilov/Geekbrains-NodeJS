const fs = require('fs'); 
  
const request = require('request');
const cheerio = require('cheerio');
const path = require('path');
const main_path = path.join(__dirname, '/news', 'news.json');
const koronavirus_path = path.join(__dirname, '/', 'koronavirus.json');

request('https://yandex.ru/news/', function (error, response, html) {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        //  console.log(html)
        let result = [];
        $('.news-card__title').each(function(i, element){
            result[i] = {id: i, title:($(this).text())};
            // console.log($(this).text());
            
        });
        // console.log(result);
        fs.writeFile(main_path, JSON.stringify(result), ["utf8"], (err) => {
            if (err) throw err;
          //   console.log('The file has been saved!');
          });
    } else {
        console.log(error, response.statusCode);
    }
});