const readline = require('readline');
const _ = require('lodash');

const moment = require('moment');
const winston = require('winston');
const lineReader = require('line-reader');
const path = require('path');
const log_path = path.join(__dirname, '/', 'results.log');
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
    new winston.transports.File({ filename: log_path }),
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
    let text = '\nИгр сыграно: ' + statistics.games_played + '\nВыиграно игр: ' + statistics.games_won +
                '\nВыпал орёл: ' + statistics.heads_counter + '\nВыпала решка: ' + statistics.tails_counter
    console.log(text);

}


rl.question(question, function(answer) {
    
    if (answer === '3') {
        
        readLog();
        // console.log(statistics);

        rl.close();
    } else {
        let result = _.sample(['1', '2']);
        let result_word; 
        let answer_word;
        
        if (result === '1')
            result_word = 'орёл\n';
        else
            result_word = 'решка\n';
    
        if (answer === '1')
            answer_word = 'орёл';
        else
            answer_word = 'решка';
    
        if (answer === result)
            end_game_words = 'победили, удача на Вашей стороне!\n';
        else
            end_game_words = 'проиграли, повезёт в другой раз\n';
    
        
        console.log('\nВаш выбор: ' + answer_word);
        console.log('Бросаем монетку');
        console.log('Результат: ' + result_word);
        console.log('Вы ' + end_game_words);
    
        logger.log({
            date: moment(new Date()).format('YYYY.MM.DD'),
            level: 'info',
            answer: answer,
            result: result,
            win: answer === result
          });
    
        rl.close();
    }

});
