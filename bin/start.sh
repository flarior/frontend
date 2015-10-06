#!/bin/bash

export FRONTEND_ROOT=$(readlink -f "$(dirname $0)/..")

while true; do
    "${FRONTEND_ROOT}/node_modules/gulp/bin/gulp.js"
    sleep 3
done
