#!/usr/bin/env bash
set -euo pipefail

LOCAL_SRC_DIR="/usr/local/lib/auditron"
DST_DIR="/usr/local/lib/auditron"
MIRROR_URL="http://localhost/auditron-mirror/cis_definitions.json" 
mkdir -p "$DST_DIR"

if command -v curl >/dev/null 2>&1; then
  if curl -fsSL "$MIRROR_URL" -o "$DST_DIR/cis_definitions.json"; then
    echo "[fetch_cis] fetched definitions from mirror"
    exit 0
  fi
fi

if [ -f "$DST_DIR/cis_definitions.json" ]; then
  echo "[fetch_cis] no new definitions fetched; keeping existing copy"
  exit 0
fi

cat > "$DST_DIR/cis_definitions.json" <<'EOF'
{
  "version":"initial",
  "rules":[
    {
      "id":"CIS-LINUX-0001",
      "description":"No executables in /tmp",
      "path":"/tmp",
      "pattern":"*.sh",
      "action":"report"
    }
  ]
}
EOF
echo "[fetch_cis] created default cis_definitions.json"
