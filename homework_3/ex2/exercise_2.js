
const express = require('express');
const app = express();
const https = require('https');
const fs = require('fs');
// const fs_async = require('fs').promises;

const IAM_TOKEN = 't1.9f7L7euelZrPzpvNyc2ckpOZksyTnZfJxuX090orVwL67094W9bd9PcKWlQC-u9PeFvW.CcvEsi3ancoVgCHHAW_BO7LPS-6tZDMUXFQrkMvAWVWLKBlS11qpsKllciKro0Yx3zWkijYWmE7X30ui1z1lBw';
const FOLDER = 'b1gr1rrj3mgiq20uild5'

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
        res.on('data', function (chunk) {
            result = JSON.parse(chunk);
            fs.writeFile('translate_result.txt', result.translations[0].text, ["utf8"], (err) => {
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

const translateRouter = express.Router();

translateRouter.get('/:str', (req, res) => {
    const str = req.params.str;
    translate(str);

    let result = fs.readFileSync('translate_result.txt', 'utf8');

    res.send(result);
});

app.use('/api/v1/translate', translateRouter);

app.listen(3000, () => console.log('Listening on port 3000'));