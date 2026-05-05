+++
title = "File Tests"
front = "Common tests inside `[[ ]]` for checking file properties."
category = "files-streams"
difficulty = "beginner"
weight = 220
+++

```sh
[[ -f file ]]    # is a regular file
[[ -d dir ]]     # is a directory
[[ -e path ]]    # exists (any kind)
[[ -r file ]]    # readable
[[ -w file ]]    # writable
[[ -x file ]]    # executable
[[ -s file ]]    # not empty
[[ -z "$var" ]]  # variable is empty
[[ -n "$var" ]]  # variable is non-empty
```

Always quote variables in tests: `[[ -f "$path" ]]`. Combine with `&&` / `||` for compact logic: `[[ -f .env ]] && source .env`.
