//entry point - where does app kick off aka src/app.js
//tell output

//contains path to current location aka indecisionapp proj folder
console.log(__dirname);

//below is a 'node thing'
module.exports = {
  entry: './src/app.js',
  output: {
    //needs to be absolute path
    path: '',
    filename: 'bundle.js'
  }
};
