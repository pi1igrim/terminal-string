module.exports = {
  entry: './main.js',
  output: {
    path: '/dev/shm/dist/',
    filename: 'sjournal.bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader'
      }
    ]
  },
  mode: 'production',
  target: 'node'
};
