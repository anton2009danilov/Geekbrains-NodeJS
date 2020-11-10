const https = require('https');
const fs = require('fs');

const IAM_TOKEN = 't1.9f7L7euelZrPzpvNyc2ckpOZksyTnZfJxuX090orVwL67094W9bd9PcKWlQC-u9PeFvW.CcvEsi3ancoVgCHHAW_BO7LPS-6tZDMUXFQrkMvAWVWLKBlS11qpsKllciKro0Yx3zWkijYWmE7X30ui1z1lBw';
const FOLDER = 'b1gr1rrj3mgiq20uild5'
let eng_string = 'Mother was washing frame';

const translate = function(str) {
    const options = {
        hostname: 'translate.api.cloud.yandex.net',
        path: '/translate/v2/translate/',
        method: 'POST',
        headers: {
            'Content-Type': 'aaplication/json',
            'Authorization': 'Bearer ' + IAM_TOKEN
        }
    }
    
    const req = https.request(options, (res) => {
        // console.log('STATUS: ' + res.statusCode);
        // console.log('HEADERS: ' + JSON.stringify(res.headers));
        // res.setEncoding('utf8');
        // console.log(options);
        res.on('data', function (chunk) {
            // console.log('BODY: ' + chunk);
            fs.writeFile('translate_result.json', chunk, ["utf8"], (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
              });
        });
    })
    
    req.write(`{
        "folder_id": "${FOLDER}",
        "texts": ['${str}'],
        "targetLanguageCode": "ru"
    }`);
    
    req.end();
}

// translate(eng_string);

console.log(fs.readFileSync('translate_result.json', 'utf8'));