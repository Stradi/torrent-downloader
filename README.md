# Simple Torrent Downloader &middot; ![GitHub](https://img.shields.io/github/license/Stradi/torrent-downloader?style=plastic)

> Yes simple. Because It has almost no functionality.

You can use this for downloading multiple magnet files from a `.json` file maybe?? Or you can use other libraries, because this one sucks.

## Installing

Installation process is really simple.
First you need to download this project. This can be done by a really simple `git` command. You can paste this code to your terminal.
```sh
git clone https://github.com/Stradi/torrent-downloader.git
```
After that you should install required node modules to run this program. This one is also really simple.
You just need to go to directory where `package.json` file is and run the command below.
```sh
npm install
```
This command installs all the required modules for this program to run.
Installation process is really simple as that. So we can continue with the next stage, the Getting Started stage.

## Getting Started
This is actually really simple to use. You have 2 commands, yes only two. Let's get to know those commands.
If you want to see the commands, you can just type `node index.js --help` and see all the commands.

### Download Command
Download command just downloades the torrent file you specified with arguments. This sentence could confuse you, so I decided to give an example for better understanding.

For example you want to download a torrent and you have `.magnet` file. Downloading an `.magnet` torrent file with this program is really simple by using `download` command.

```sh
node index.js download --magnet "magnet url"
```

Also you can use the short version of this command by changing `--magnet "magnet url"` with `-m "magnet url"`.

```sh
node index.js download -m "magnet url"
```

### Parse Command (WIP)
Parse command is work in progress right now. But let me explain to you what it does.
It parses the `.json` file, gets the all torrent magnet urls that specified in that file and downloads the first video. 
I am calling this WIP because it only downloads the first torrent. In later updates I'll update this so it will download all the torrents.

Usage of this command is also really simple.
```sh
node index.js parse --path "path of the json file"
```

Of course you can use the short version of this command by changing `--parse "path of the json file"` with `-p "path of the json file"`.

```sh
node index.js parse -p "path of the json file"
```

## Developing

### Built With
This program uses some other modules to help the development process.
* **WebTorrent**: WebTorrent is a Torrent library for Node.js.
* **Yargs**: Yargs is a command line parser. It helps you build interactive command line tools (like this one) by parsing arguments and stuff.
* **pretty-bytes**: It just takes bytes and returns 'human readable' bytes. For example, it converts 4096 to 4Mb.
* **terminal-kit**: This is really powerful terminal library with colors, mouse handling etc.

## Licensing
MIT License

Copyright (c) 2020 Batın Evirgen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
