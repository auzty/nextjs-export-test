#!/bin/sh
cat src/nonsupportedfiles/backup/locale.backup.js > pages/sample/locales/index.js 
cat src/nonsupportedfiles/backup/fallback.backup.js > pages/sample/fallback/\[id\].js 
cat src/nonsupportedfiles/backup/serversideprops.js > pages/sample/serversideprops/index.js 
cat src/nonsupportedfiles/backup/next.config.js > next.config.js 

# this is for restore the unsupported files