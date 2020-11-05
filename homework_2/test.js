
const { timeout } = require('async');
const lineReader = require('line-reader');

const statistics = {
    games_played: 0,

}


async function readLog() {
    let promise = new Promise ( (resolve, reject) => {
        lineReader.eachLine('results.log', function(line) {
            statistics.games_played++;
            
            let game = JSON.parse(line)

            if (game.win)
                statistics.games_won++;
            
            if (game.result === '1')
                statistics.heads_counter++;

            if (game.result === '2')
                statistics.tails_counter++;
            // console.log(line);
        });
    })
    
    let result = await promise;
    console.log(statistics);


}

readLog();
timeout( () => {console.log(statistics)}, 1000);
// console.log(statistics);

const moment = require('moment');
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
//   date: new Date('YYYY-MM-DD'),
  format: winston.format.json(),
//   defaultMeta: { service: 'game-logger' },
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'results.log' }),
  ],
});


logger.log({
    date: moment(new Date()).format('YYYY.MM.DD'),
    level: 'info',
    answer: '1',
    result: '2',
    win: true
  });








// const { createLogger, format, transports } = require('winston');
// const { combine, timestamp, label, printf } = format;

// const myFormat = printf(({ level, message, label, timestamp }) => {
//   return `${timestamp} [${label}] ${level}: ${message}`;
// });

// const logger = createLogger({
//     format: combine(
//         label({
//             label: 'right meow!'
//         }),
//         timestamp({ format: 'YYYY-MM-DD'}),
//         myFormat
//     ),
//     transports: [new transports.File({
//             filename: 'error.log',
//             level: 'error'
//         }),
//         new transports.File({
//             filename: 'results.log'
//         }),
//     ]

// });

// logger.log({
//     level: 'info',
//     message: 'Pass an object and this works',
//     additional: 'properties',
//     are: 'passed along'
// });