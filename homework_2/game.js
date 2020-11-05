// const { randomInt } = require('crypto');
const readline = require('readline');
const _ = require('lodash');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// const question = 'Орёл или решка?\n1 - орёл\n2 - решка\n3 - закончить игру\n';
const question = 'Орёл или решка?\n1 - орёл\n2 - решка\n';

rl.question(question, function(answer) {
    let result = _.sample(['1', '2']);
    // console.log (result);
    // console.log (answer === '1');
    
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

    

    console.log('Ваш выбор: ' + answer_word);
    console.log('Бросаем монетку');
    console.log('Результат: ' + result_word);
    console.log('Вы ' + end_game_words);

    rl.close();
});
