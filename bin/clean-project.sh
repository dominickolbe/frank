#!/bin/bash

echo " " && echo "### Start clean-project task ###" && echo " "

echo "➜ delete node_modules and yarn.lock" && echo " "
rm -rf node_modules yarn.lock yarn-error.log

echo "➜ run yarn cache clean" && echo " "
yarn cache clean --silent

echo "➜ clean watchman" && echo " "
watchman watch-del-all

echo "➜ clean metro cache" && echo " "
rm -fr $TMPDIR/haste-map-* && rm -rf $TMPDIR/metro-cache

echo "➜ yarn install" && echo " "
yarn install --silent

echo " " && echo "### clean-project task done ✨ ###" && echo " "