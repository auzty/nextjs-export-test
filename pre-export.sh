#!/bin/sh
cat src/nonsupportedfiles/next.config.js > next.config.js
cat src/nonsupportedfiles/locale.js > pages/sample/locales/index.js 
cat src/nonsupportedfiles/fallback.js > pages/sample/fallback/\[id\].js 
cat src/nonsupportedfiles/serversideprops.js > pages/sample/serversideprops/index.js