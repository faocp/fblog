+++
title = "Line Endings"
front = "Text files end lines differently across systems: Unix uses LF (`\\n`), Windows uses CRLF (`\\r\\n`)."
category = "data"
difficulty = "beginner"
weight = 180
+++

```sh
# check
file script.sh
# → ASCII text                     (good — LF)
# → ASCII text, with CRLF endings  (Windows)

# convert
dos2unix script.sh

# git auto-handle
git config --global core.autocrlf input    # macOS/Linux
```

CRLF in shell scripts breaks them silently (`bash: cannot execute: required file not found`). Set git's `core.autocrlf` so checkouts use the right convention for your OS.
