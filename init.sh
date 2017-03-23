#!/usr/bin/env bash

rm docs/*
cp README.md docs/;
rm README.md;
ex -sc '1d5|x' ./docs/README.md;
echo "This project was bootstrapped with[Create Redux App](https://github.com/delvallejonatan/create-redux-app). Refer to **docs** to find information on how to perform common tasks." > README.md;
npm install;
rm -rf .git;
git init && git add . && git commit -m "Initial commit";
rm init.sh;
