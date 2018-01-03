//entry point - where does app kick off aka src/app.js
//tell output

//load module by name
const path = require('path');

//contains path to current location aka indecisionapp proj folder
console.log(path.join(__dirname, 'public');

//below is a 'node thing'
module.exports = {
  entry: './src/app.js',
  output: {
    //needs to be absolute path
    path: '',
    filename: 'bundle.js'
  }
};
