#!/bin/bash

# Start in tasks/
cd "$(dirname "$0")"

# Exit the script on any non 0 return code
set -e

# Echo every command being executed
set -x

# Go to root
cd ..
root_path=$PWD

# Publish
./node_modules/.bin/lerna publish --skip-git --yes
