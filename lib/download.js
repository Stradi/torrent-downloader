const WebTorrent = require("webtorrent");

//TODO: Proper logging
let downloadMagnet = (magnet) => {
  const client = new WebTorrent();
  console.log("Client created.");

  client.on("error", onClientError);
  client.add(magnet, { path: '.' }, onTorrentAdded);
}

let onClientError = (error) => {
  console.log(error);
}

let onTorrentAdded = (torrent) => {
  console.log("New torrent file added.");

  torrent.on("warning", (err) => {
    //console.log(err);
  });

  torrent.on("error", (err) => {
    //console.log(err);
  });

  torrent.on("done", () => {
    //Called when torrent finished.
    console.log("done");
  });

  torrent.on("upload", () => {
    //Called when upload happens
  });

  torrent.on("wire", (wire, addr) => {
    //Called when new peer added..
  });

  torrent.on("noPeers", (announceType) => {
    //Emitted whenever a DTH or tracker announce occurs,
    //but no peers have been found.
  });

  torrent.on("download", () => {
    console.log("down");
  }); //progress logging!!
};

module.exports = downloadMagnet;