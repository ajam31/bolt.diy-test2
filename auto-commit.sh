#!/bin/sh
while true; do
  git add .
  git commit -m "Auto-commit: $(date)"
  git push origin main
  sleep 300 # 5 minutes
done
