const boxen = require('boxen');
 
//console.log(boxen('Good', {padding: 1}));
 
console.log(boxen('Good',
  {
    padding: 1,
    margin: 1,
    borderStyle: 'classic',
    borderColor: 'green'
}));

console.log(boxen('Bad',
  {
    padding: 2,
    margin: 2,
    borderStyle: 'singleDouble',
    borderColor: 'red',
    float: 'right'
}));

console.log(boxen('Evil',
  {
    padding: 1,
    borderStyle: 'bold',
    borderColor: 'magenta',
    float: 'center'
}));