+++
title = "Robust Script Template"
front = "A safe starting point for any new script. The `set` options catch errors that would otherwise pass silently."
category = "workflows"
difficulty = "intermediate"
weight = 220
+++

```sh
#!/usr/bin/env bash
set -euo pipefail

# -e  exit on any error
# -u  error on undefined variables
# -o pipefail  fail if any pipe segment fails

readonly LOG_DIR="${LOG_DIR:-/var/log/myapp}"

main() {
    local input="$1"
    echo "Processing $input"
    # ...
}

main "$@"
```

`set -euo pipefail` should be on every script you write. Without `-e`, a failing command keeps going. Without `-u`, typos in variable names silently expand to empty strings — a classic source of bugs.
