# course-planner

This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 4.1.0.

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node >= 4.x.x, npm >= 2.x.x
- [Gulp](http://gulpjs.com/) (`npm install --global gulp`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. node-gyp
node-gyp is a cross-platform command-line tool written in Node.js for compiling native addon modules for Node.js. You'll need it for things like brotli compression.

Read through the Installation section of the node-gyp readme. Basically you'll need Python 2.7, make, and a C/C++ compiler (like GCC on unix, Xcode on OS X, or Visual Studio tools on Windows). To tell npm to use Python 2.7 (if you also have a different version installed), run npm config set python /path/to/executable/python2.7. Here's a snapshot of the instructions from their readme:

    1.1 On Unix:
      python (v2.7 recommended, v3.x.x is not supported)
      make
      A proper C/C++ compiler toolchain, like GCC
      On Mac OS X:
      python (v2.7 recommended, v3.x.x is not supported) (already installed on Mac OS X)
      Xcode
      You also need to install the Command Line Tools via Xcode. You can find this under the menu Xcode -> Preferences -> Downloads
      This step will install gcc and the related toolchain containing make
    1.2 On Windows:
        1.2.1 Option 1: Install all the required tools and configurations using Microsoft's windows-build-tools using npm install --global --production windows-build-tools from an elevated PowerShell or CMD.exe (run as Administrator).

        1.2.2 Option 2: Install tools and configuration manually:
        Visual C++ Build Environment:
          Option 1: Install Visual C++ Build Tools using the Default Install option.
          Option 2: Install Visual Studio 2015 (or modify an existing installation) and select Common Tools for Visual C++ during setup. This also works with the free Community and Express for Desktop editions.
          :bulb: [Windows Vista / 7 only] requires .NET Framework 4.5.1
            Install Python 2.7 (v3.x.x is not supported), and run npm config set python python2.7 (or see below for further instructions on specifying the proper Python version and path.)
            Launch cmd, npm config set msvs_version 2015
            If the above steps didn't work for you, please visit Microsoft's Node.js Guidelines for Windows for additional tips.

2. Run `npm install` to install server dependencies.

3. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

4. Run `gulp serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `gulp build` for building and `gulp serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.
"# coursePlanner"
