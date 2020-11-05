// let minimist = require('minimist');
// let argv = minimist(process.argv.slice(2));
// console.dir(argv);


// let logger;

// if (argv.debug || argv.d) {
//     logger = console;
// }

// console.log('debug');
// console.log(process.env);

// console.log({ name: 'Yura', age: 25});


// var readline = require('readline');
// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.on('line', function (cmd) {
//     console.log('You just typed: ' + cmd);
//     if (cmd === 'quit') {
//         rl.close();
//     }
// });

// rl.question('What is your favorite food? ', function(answer) {
//     console.log('Oh, so your favorite food is ' + answer);
// });

// console.time('main');
// for (let i = 0; i < 1000000; i++) {

// }
// console.timeEnd('main');

const { Console } = require('console');
// const fs = require('fs');
const fs = undefined;

// const util = require('util');

// let data = fs.readFileSync('package-lock.json', 'utf8');
// let data;

// fs.readFile('package-lock.json', 'utf8', (err, fdata) => {
//     if (err) {
//         console.log(err);
//     } else {
//         data = fdata;
//         console.log(data);
//     }
// });

// setTimeout(() => console.log(data), 10);

// const readFilePromise = util.promisify(fs.readFile);

// readFilePromise('package-lock.json', 'utf8')
//     .then( (fdata) => {
//         data = fdata;
//         console.log(data);
// })
//     .catch( err => console.log('error:', err) );

try {
    const logger = new Console(fs.createWriteStream('log.txt'), fs.createWriteStream('errors.txt'));
} catch (err) {
    console.log(err);
}

try {
    const data = JSON.parse('{');
} catch (err) {
    req.status(400).send({error: 'Incorrect request'});
}

    console.log(1111);
    // logger.log('info');
    // logger.error('error');