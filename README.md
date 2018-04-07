# phaser-cli

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

A simple CLI for scaffolding Phaser projects. Based on
[vue-cli](https://github.com/vuejs/vue-cli) by Evan You.

## Notice

This package is now deprecated in favour of [Phaser CLI](https://github.com/phaser-cli/phaser-cli).

Please use the following commands to use the latest version of Phaser CLI.

```bash
npm install -g @phaser-cli/cli
# or
yarn global add @phaser-cli/cli

phaser create <project-name>
```

## Old Guide

### Installation

Prerequisites: [Node.js](https://nodejs.org/en/) (>=6.x required), npm version 3+ and [Git](https://git-scm.com/).

``` bash
$ npm install -g phaser-cli
```

### Usage

``` bash
$ phaser init <template-name> <project-name>
```

Example:

``` bash
$ phaser init webpack my-project
```

The above command pulls the template from [phaser-templates/webpack](https://github.com/phaser-templates/webpack), prompts for some information, and generates the project at `./my-project/`.

### Recommended Templates

The purpose of the recommended phaser-cli templates are to provide a quick way to
get you started on a Phaser project.

All project templates that we recommend are repos in the [phaser-templates organization](https://github.com/phaser-templates). When a new template is added to the organization, you will be able to run `phaser init <template-name> <project-name>` to use that template. You can also run `phaser list` to see all available recommended templates.

Current available templates include:

- [webpack](https://github.com/phaser-templates/webpack) - A full-featured Webpack setup with linting
- [webpack-simple](https://github.com/phaser-templates/webpack-simple) - A basic Webpack setup
- [simple](https://github.com/phaser-templates/simple) - The simplest possible Phaser setup in a single HTML file

### Custom Templates

It's unlikely to make everyone happy with the recommended templates. You can simply fork a recommended template and then use it via `phaser-cli` with:

``` bash
phaser init username/repo my-project
```

Where `username/repo` is the GitHub repo shorthand for your fork.

The shorthand repo notation is passed to [download-git-repo](https://github.com/flipxfx/download-git-repo) so you can also use things like `bitbucket:username/repo` for a Bitbucket repo and `username/repo#branch` for tags or branches.

If you would like to download from a private repository use the `--clone` flag and the cli will use `git clone` so your SSH keys are used.

### Local Templates

Instead of a GitHub repo, you can also use a template on your local file system:

``` bash
phaser init ~/fs/path/to-custom-template my-project
```

### Writing Custom Templates from Scratch

- A template repo **must** have a `template` directory that holds the template files.

- A template repo **may** have a metadata file for the template which can be either a `meta.js` or `meta.json` file. It can contain the following fields:

  - `prompts`: used to collect user options data;

  - `filters`: used to conditional filter files to render.

  - `completeMessage`: the message to be displayed to the user when the template has been generated. You can include custom instruction here.

  - `complete`: Instead of using `completeMessage`, you can use a function to run stuffs when the template has been generated.

#### prompts

The `prompts` field in the metadata file should be an object hash containing prompts for the user. For each entry, the key is the variable name and the value is an [Inquirer.js question object](https://github.com/SBoudrias/Inquirer.js/#question). Example:

``` json
{
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    }
  }
}
```

After all prompts are finished, all files inside `template` will be rendered using [Handlebars](http://handlebarsjs.com/), with the prompt results as the data.

##### Conditional Prompts

A prompt can be made conditional by adding a `when` field, which should be a JavaScript expression evaluated with data collected from previous prompts. For example:

``` json
{
  "prompts": {
    "lint": {
      "type": "confirm",
      "message": "Use a linter?"
    },
    "lintConfig": {
      "when": "lint",
      "type": "list",
      "message": "Pick a lint config",
      "choices": [
        "standard",
        "airbnb",
        "none"
      ]
    }
  }
}
```

The prompt for `lintConfig` will only be triggered when the user answered yes to the `lint` prompt.
