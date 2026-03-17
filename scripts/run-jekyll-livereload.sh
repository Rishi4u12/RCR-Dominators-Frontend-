#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
JEKYLL_PORT="${JEKYLL_PORT:-4000}"
LIVERELOAD_PORT="${LIVERELOAD_PORT:-35730}"

cd "$ROOT_DIR"

lsof -tiTCP:"$JEKYLL_PORT" -sTCP:LISTEN | xargs -r kill -9 || true
lsof -tiTCP:"$LIVERELOAD_PORT" -sTCP:LISTEN | xargs -r kill -9 || true

bundle exec jekyll serve \
  --watch \
  --livereload \
  --port "$JEKYLL_PORT" \
  --livereload-port "$LIVERELOAD_PORT"