const term = require("terminal-kit").terminal;
const prettyBytes = require("pretty-bytes");

let isDownloadStatusInitialized = false;
let downloadStatusX, downloadStatusY;

module.exports.info = (text) => {
  term.log.blue.bold("INFO: ")(text + "\n");
}

module.exports.warning = (text) => {
  term.yellow.bold("WARN: ")(text + "\n");
};

module.exports.error = (text) => {
  term.red.bold("ERR:  ")(text + "\n");
}

module.exports.success = (text) => {
  term.green(text + "\n");
}

module.exports.downloadStatus = (currentBytes, totalBytes) => {
  if(!isDownloadStatusInitialized) {
    term.getCursorLocation((err, x, y) => {
      downloadStatusX = x;
      downloadStatusY = y;
    });

    isDownloadStatusInitialized = true;
  }

  term.moveTo(downloadStatusX, downloadStatusY);
  term.bold.yellow(prettyBytes(currentBytes))(" / ").bold.green(prettyBytes(totalBytes));
}