const readline = require('readline');
const _ = require('lodash');

const moment = require('moment');
const winston = require('winston');
const lineReader = require('line-reader');
const { read } = require('fs');


const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'results.log' }),
  ],
});


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// const question = 'Орёл или решка?\n1 - орёл\n2 - решка\n3 - закончить игру\n';
const question = 'Орёл или решка?\n1 - орёл\n2 - решка\n3 - посмотреть статистику игр\n';

const statistics = {
    games_played: 0,
    games_won: 0,
    heads_counter: 0,
    tails_counter: 0,
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

        setTimeout( () => resolve(1), 100);
    })
    
    let result = await promise;
    console.log(statistics);

}

readLog();