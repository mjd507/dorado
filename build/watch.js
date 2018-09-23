const chokidar = require('chokidar');
const shell = require("shelljs");

// Initialize watcher.
const watcher = chokidar.watch('src');

// const log = console.log.bind(console);

// Add event listeners.
watcher.on('change', (path) => {
  // log(`File ${path} has been changed`);
  shell.exec(`eslint --fix ${path}`)
})
