+++
title = "Variables"
front = "Assign without spaces around `=`; reference with `$`."
category = "basics"
difficulty = "beginner"
weight = 10
+++

```sh
name="Felipe"
count=42
echo "$name has $count items"

# readonly
readonly API_URL="https://api.example.com"

# default if unset
port="${PORT:-8080}"
```

Always quote `"$var"` to handle spaces and special chars. The `${VAR:-default}` pattern is essential for env-driven scripts.
