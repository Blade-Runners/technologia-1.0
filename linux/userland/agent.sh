#!/usr/bin/env bash
# set -euo pipefail

REPORT_IN_RAM="/run/auditron/report.json"
REPORT_HTML_IN_RAM="/run/auditron/report.html"
DEST_DIR="/var/lib/auditron"

mkdir -p "$DEST_DIR"
chmod 0755 "$DEST_DIR"

ts="$(date -u +%Y%m%dT%H%M%SZ)"
if [ -f "$REPORT_IN_RAM" ]; then
  cp -f "$REPORT_IN_RAM" "$DEST_DIR/auditron-report-${ts}.json"
  chmod 0644 "$DEST_DIR/auditron-report-${ts}.json"
fi

ln -sf "$DEST_DIR/auditron-report-${ts}.json" "$DEST_DIR/latest.report"
cd "$DEST_DIR"

python3 -m http.server 1025
