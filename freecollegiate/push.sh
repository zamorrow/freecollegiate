#!/usr/bin/env bash
# Usage: ./push.sh https://github.com/<you>/freecollegiate.git
set -e
git init -b main
git add .
git commit -m "Organize project files into category folders"
git remote add origin "$1"
git pull origin main --allow-unrelated-histories --no-edit || true
git push -u origin main
