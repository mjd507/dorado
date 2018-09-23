let moduleExports = {};

const r = require.context('./', true, /^\.\/.+\/.+\.js$/) // ./xxx/xxx.js

r.keys().forEach(key => {
  // const attr = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.')); // './array/arrays.js' -> arrays
  // moduleExports[attr] = r(key).default
  moduleExports = Object.assign(moduleExports, r(key).default)
});

console.log(moduleExports)

module.exports = moduleExports
