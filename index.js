const download = require("./lib/download")
const argv = require("yargs")
.usage("Usage: $0 <command> [options]")
.command("download", "Download the specified torrent", (yargs) => {
  yargs.positional("magnet", {
    type: "string",
    describe: "magnet uri to download",
    demandOption: false
  });
}, (argv) => {
  download(argv.magnet);
})
.argv;