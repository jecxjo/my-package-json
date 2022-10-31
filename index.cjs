const fs = require('fs');

module.exports = function () {
  if (process?.env?.npm_package_json) {
    let raw = fs.readFileSync(process.env.npm_package_json);
    return JSON.parse(raw);
  }

  console.log('ERROR: No environment varaible `npm_package_json`');
  return {};
};
