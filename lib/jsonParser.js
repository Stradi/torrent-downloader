const fs = require("fs");

module.exports.parseJSON = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if(err) reject(err);
      resolve(JSON.parse(data));
    });
  });
}