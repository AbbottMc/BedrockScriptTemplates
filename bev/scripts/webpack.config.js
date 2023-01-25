const path = require('path');

module.exports = {
  mode: "none",
  entry: './{{project_id}}/Main.ts',
  output: {
    filename: 'Main.js',
    path: path.resolve(__dirname, 'build')
  },
  experiments: {
    outputModule: true
  },
  externalsType: "module",
  externals: {
    "@minecraft/server": "@minecraft/server",
    "@minecraft/server-ui": "@minecraft/server-ui"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ["@babel/plugin-transform-runtime"],
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  }
};