const WebTorrent = require("webtorrent");
const Logger = require("./logger");

let downloadMagnet = (magnet) => {
  const client = new WebTorrent();
  Logger.info("Client created.");

  client.on("error", onClientError);
  client.add(magnet, { path: '.' }, onTorrentAdded);
}

let onClientError = (error) => {
  Logger.error(error);
}

let onTorrentAdded = (torrent) => {
  Logger.info("New torrent file added.");
  torrentSize = torrent.length;

  torrent.on("done", () => {
    Logger.success("Download finished.");
  });

  torrent.on("download", (bytes) => {
    updateDownloadProgress(bytes);
  });
};

let progress = 0;
let torrentSize;

let updateDownloadProgress = (bytes) => {
  progress += bytes;
  Logger.downloadStatus(progress, torrentSize);
}

module.exports = downloadMagnet;