#!/usr/bin/env bash

rm -rf docs/**;
cp README.md docs/create-redux-app;
rm README.md;
ex -sc '1d5|x' ./docs/README.md;
echo "This project was bootstrapped with [Create Redux App](https://github.com/delvallejonatan/create-redux-app). Refer to **docs** to find information on how to perform common tasks." > README.md;
npm install;
rm -rf .git;
rm init.sh;
git init && git add . && git commit -m "Initial commit";
