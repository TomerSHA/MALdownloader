var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'fun.js',
        path: path.resolve(__dirname, 'extension')
    }
};