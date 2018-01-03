const path = require('path');

//automatically allows es6 import/exports - includes module bundler
//only app.js automatically runs in browser since entry point
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  }
};
