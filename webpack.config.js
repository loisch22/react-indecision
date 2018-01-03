const path = require('path');

//automatically allows es6 import/exports - includes module bundler
//only app.js automatically runs in browser since entry point
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      //regular expression - target files that end in .js
      //what files do we want to run this loader on? that's where test comes in
      //. has special sign so \. before and $ tells at the end
      test: /\.js$/,
      exclude: /node_modules/
    }]
  }
};

//loader - customize webpack behavior
//ex. when webpack sees js file, run it through babel, convert es6 to es5 and jsx to reg js
