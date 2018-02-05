const moment = require('moment');

//var foo = new Date();
//console.log(foo.getMonth());

var ts = moment();
//ts.add(10, 'year').subtract(9, 'months');
//console.log(ts.format('MMM Do, YYYY hh:mm a'));
console.log(ts.format('h:mm a'));

// 10:35 am
