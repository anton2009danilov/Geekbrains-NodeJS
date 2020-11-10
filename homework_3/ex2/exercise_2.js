https = require('https');
const IAM_TOKEN = 't1.9f7L7euelZrPzpvNyc2ckpOZksyTnZfJxuX090orVwL67094W9bd9PcKWlQC-u9PeFvW.CcvEsi3ancoVgCHHAW_BO7LPS-6tZDMUXFQrkMvAWVWLKBlS11qpsKllciKro0Yx3zWkijYWmE7X30ui1z1lBw';
const FOLDER = 'b1gr1rrj3mgiq20uild5'

const options = {
    hostname: 'translate.api.cloud.yandex.net',
    path: '/translate/v2/translate/',
    method: 'POST',
    headers: {
        'Content-Type': 'aaplication/json',
        'Authorization': 'Bearer ' + IAM_TOKEN
    }
}

var req = https.request(options, (res) => {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });
})

req.write(`{
    "folder_id": "${FOLDER}",
    "texts": ["В этом примере показано, как перевести на русский язык две строки с текстом", "World is very big"],
    "targetLanguageCode": "en"
}`);
req.end();