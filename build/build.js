const path = require('path')
const ora = require('ora')
const rm = require('rimraf')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('./webpack.conf')
const pkg = require('../package.json')

const rootPath = path.resolve(__dirname, '../')

const spinner = ora('building...')
spinner.start()
rm(path.resolve(rootPath, 'dist', `${pkg.name}.min.js`), err => {
  if (err) throw (err)
  webpack(config, (err, stats) => {
    if (err) throw (err)
    spinner.stop()
    process.stdout.write(stats.toString({
      colors: true,
      modules: true,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('Build complete.\n'))
  })
})
