#!/bin/bash

#ONLY FOR Windows
#DON'T EXECUTE THIS - BUT USE install-windows.sh

read -p "Would you install npm global packages? Press y or n: " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo installing npm global packages - also windows-build-tools and node-gyp
  npm install -g --production windows-build-tools
  npm install -g node-gyp
  npm install -g karma-cli
  npm install -g webpack@2.2.0-rc.4
  npm install -g typescript@2.0.10
  npm install -g typings
  npm install -g npm-check
  npm install -g remap-istanbul
  npm install -g webdriver-manager
  npm install -g protractor
  npm install -g nsp
  npm install -g codeclimate-test-reporter
  npm install -g istanbul
  npm install -g snyk
fi

#read -p "Would you update webdriver-manager to be able to use Selenium Server? Press y or n: " -n 1 -r
#echo
#if [[ $REPLY =~ ^[Yy]$ ]]
#then
#  echo setting up a Selenium Server
#  sudo webdriver-manager update
#fi
