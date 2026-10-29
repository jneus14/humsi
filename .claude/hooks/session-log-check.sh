#!/bin/sh
# Stop hook: a session that changed files in this folder may not end until today's
# entry exists in the shared session log (~/ice/docs/log). Applies to every Claude
# account and agent on this machine that works here. Sessions that only read, or only
# edit the docs themselves, are exempt. See ~/ice/docs/README.md.
input=$(cat)
active=$(printf "%s" "$input" | jq -r ".stop_hook_active // false" 2>/dev/null || echo false)
[ "$active" = "true" ] && exit 0
DOCS="${HIP_DOCS_DIR:-$HOME/ice/docs}"
[ -d "$DOCS/log" ] || exit 0
cd "${CLAUDE_PROJECT_DIR:-.}" 2>/dev/null || exit 0
midnight=$(mktemp); touch -t "$(date +%Y%m%d)0000" "$midnight"
changed=""
if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  # Working-tree changes outside docs/ that were written today, or commits today outside docs/.
  for p in $(git status --porcelain --untracked-files=all -- . ":(exclude)docs" 2>/dev/null | cut -c4- | sed "s/.* -> //"); do
    case "$p" in node_modules/*|.next/*|dist/*|*.db|*.db-journal|backups/*|data/*) continue;; esac
    if [ -e "$p" ] && [ "$p" -nt "$midnight" ]; then changed="$p"; break; fi
  done
  [ -z "$changed" ] && changed=$(git log --since=midnight --format=%h -- . ":(exclude)docs" 2>/dev/null | head -1)
else
  changed=$(find . -type f -newer "$midnight" -not -path "*/node_modules/*" -not -path "*/.git/*" -not -path "*/data/*" -not -path "*/dist/*" -not -path "*/.next/*" -not -path "*/docs/*" 2>/dev/null | head -1)
fi
rm -f "$midnight"
[ -z "$changed" ] && exit 0
# Was the log written today?
if [ -n "$(find "$DOCS/log" -name "*.md" -newermt "$(date +%Y-%m-%d)" 2>/dev/null | head -1)" ]; then exit 0; fi
month=$(date +%Y-%m)
file=$(ls "$DOCS/log" 2>/dev/null | grep "^$month" | grep -v README | tail -1)
[ -z "$file" ] && file="$month.md"
cat >&2 <<MSG
This session changed files here (e.g. $changed) but today has no entry in the session log yet.
Before stopping: append a "## $(date +%Y-%m-%d) ($(date +%a))" entry to $DOCS/log/$file
(format in $DOCS/log/README.md: what was asked, what was done, decided, left open, commit hashes),
and update the status line and pending list of the page you touched in $DOCS/projects/.
If this folder is not ~/ice, the page is side-tools.md or humsi-interviews.md. Then stop.
MSG
exit 2
