
const express = require('express');
const app = express();
const https = require('https');
const fs = require('fs');

const IAM_TOKEN = 't1.9f7L7euelZrPzpvNyc2ckpOZksyTnZfJxuX090orVwL67094W9bd9PcKWlQC-u9PeFvW.CcvEsi3ancoVgCHHAW_BO7LPS-6tZDMUXFQrkMvAWVWLKBlS11qpsKllciKro0Yx3zWkijYWmE7X30ui1z1lBw';
const FOLDER = 'b1gr1rrj3mgiq20uild5'
// let eng_string = 'Mother was washing frame';

async function translate(str) {
    let result;
    const options = {
        hostname: 'translate.api.cloud.yandex.net',
        path: '/translate/v2/translate/',
        method: 'POST',
        headers: {
            'Content-Type': 'aaplication/json',
            'Authorization': 'Bearer ' + IAM_TOKEN
        }
    }
    
    // let promise = new Promise((resolve, reject) => {
    //     const req = https.request(options, (res) => {
    //         res.setEncoding('utf8');
    //         res.on('data', function (chunk) {
    //             fs.writeFile('translate_result.json', chunk, ["utf8"], (err) => {
    //                 if (err) throw err;
    //                 console.log('The file has been saved!');
    //             });
    //         });
    //     })
    //     return true;
    // });

    const req = https.request(options, (res) => {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
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
    
    // console.log(req);

    req.end();
}

const translateRouter = express.Router();

translateRouter.get('/:str', (req, res) => {
    const str = req.params.str;
    translate(str);
    // console.log(str, result);

    let result = fs.readFileSync('translate_result.json', 'utf8');
    // console.log(str, result);
    result = JSON.parse(result);
    res.send(result);
});

app.use('/api/v1/translate', translateRouter);

app.listen(3000, () => console.log('Listening on port 3000'));