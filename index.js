const download = require("./lib/download")
const parseJson = require("./lib/jsonParser").parseJSON;

const argv = require("yargs")
.usage("Usage: $0 <command> [options]")
.command("download", "Download the specified torrent", (yargs) => {
  return yargs.option("magnet", {
    alias: "m",
    type: "string",
    describe: "magnet uri to download",
    demandOption: true
  });
}, (argv) => {
  download(argv.magnet);
})
.command("parse", "Parse the json file and download", (yargs) => {
  return yargs.option("path", {
    alias: "p",
    type: "string",
    describe: "path of the json file",
    demandOption: true
  });
}, (argv) => {
  parseJson(argv.path).then((data) => {
    download(data.videos[0].magnet);
  });
})
.argv;