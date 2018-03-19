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

if [ -n "$(git status --porcelain)" ]; then
  echo "Your git status is not clean. Aborting.";
  exit 1;
fi

# Publish
./node_modules/.bin/lerna publish --independent "$@"
