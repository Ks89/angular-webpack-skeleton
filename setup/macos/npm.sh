#!/bin/bash

#ONLY FOR macOS
#DON'T EXECUTE THIS - BUT USE install-macos.sh

read -p "Would you install npm global packages? Press y or n: " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo installing npm global packages
  sudo npm install -g karma-cli
  sudo npm install -g webpack
  sudo npm install -g typescript
  sudo npm install -g typings
  sudo npm install -g remap-istanbul
  sudo npm install -g webdriver-manager
  sudo npm install -g protractor
  sudo npm install -g nsp
  sudo npm install -g codeclimate-test-reporter
  sudo npm install -g istanbul
  sudo npm install -g snyk
fi

read -p "Would you update webdriver-manager to be able to use Selenium Server? Press y or n: " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo setting up a Selenium Server
  sudo webdriver-manager update
fi
