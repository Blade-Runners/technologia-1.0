#!/usr/bin/env bash

set -euo pipefail

SRC_DIR="$(cd "$(dirname "$0")" && pwd)"
INSTALL_DIR="/usr/local/lib/auditron"

echo "[+] auditron installer starting"
echo "[+] Source dir: $SRC_DIR"
echo "[+] Install dir: $INSTALL_DIR"

if [ "$EUID" -ne 0 ]; then
  echo "This installer must be run as root."
  exit 1
fi

echo "[+] Installing files to $INSTALL_DIR"
rm -rf "$INSTALL_DIR"
mkdir -p "$INSTALL_DIR"
cp -a "$SRC_DIR/early-init" "$INSTALL_DIR/early-init"
chmod 0755 "$INSTALL_DIR/early-init"
cp -a "$INSTALL_DIR/early-init" "/early-init"
cp -a "$SRC_DIR/definitions.json" "$INSTALL_DIR/definitions.json"

echo "[+] Regenerating boot structure. This may take a moment."
install -Dm755 "/proc/cmdline" "$INSTALL_DIR/cmdline"
sed -i 's|\bro\b|rw init=/early-init|g' "$INSTALL_DIR/cmdline"
mkinitcpio -k /boot/vmlinuz-linux -c /etc/mkinitcpio.conf -U /efi/uki.efi -g /boot/initramfs-linux.img --cmdline "$INSTALL_DIR/cmdline"

echo "[+] Installing userland agent and systemd service (agent will run after normal boot)"
install -Dm755 "$SRC_DIR/userland/agent.sh" "/usr/local/bin/auditron-agent.sh"
install -Dm755 "$SRC_DIR/userland/report.html" "/var/lib/auditron/report.html"
install -Dm644 "$SRC_DIR/userland/auditron.service" "/etc/systemd/system/auditron.service"

# mkdir -p /var/lib/auditron
chown -R root:root /var/lib/auditron

systemctl daemon-reload
systemctl enable --now auditron.service || true

echo "[+] Installation complete."
echo "[+] Visit http://localhost:1025/report.html for audit reports"
echo "IMPORTANT: keep a live USB handy in case of any boot problems."
echo "[+] Reboot now to run the pre-init audit or reboot later."
