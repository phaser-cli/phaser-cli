# Phaser CLI

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Build Status](https://travis-ci.org/phaser-cli/phaser-cli.svg?branch=master)](https://travis-ci.org/phaser-cli/phaser-cli)

Create Phaser projects with no build configuration.

## Getting Started

### Prerequisites

In order to use Phaser CLI you need to have [Node.js][1] (>= 6) installed.

### Quickstart

Run the following commands to install Phaser CLI and create a new project. This
will create a new folder matching the specified `project-name` and will generate
all the required files.

```bash
npm install -g @phaser-cli/cli
# or
yarn global add @phaser-cli/cli

phaser create <project-name>
```

### Running in Development

Running the following command will serve your project to [localhost:8080][4].

```bash
npm start
```

If you wish to change the host or the port of the dev server you can prepend
the command with `HOST=127.0.0.1` or `PORT=3000`, replacing the example values
with your own.

### Building for Production

The following command will build your game for production, bundling code and
assets into the `/build` directory.

```bash
npm run build
```

## Acknowledgements

Phaser CLI is based on [Create React App][2] by Facebook and [vue-cli][3] by
Evan You.

[1]: https://nodejs.org
[2]: https://github.com/facebook/create-react-app
[3]: https://github.com/vuejs/vue-cli
[4]: http://localhost:8080
