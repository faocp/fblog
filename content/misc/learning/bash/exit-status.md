+++
title = "Exit Codes"
front = "Every command returns 0 (success) or non-zero (failure). Available as `$?`."
category = "basics"
difficulty = "beginner"
weight = 50
+++

```sh
ls /tmp
echo "Exit code: $?"      # 0

ls /no/such/path
echo "Exit code: $?"      # 2

# use directly in conditions
if grep -q "ERROR" log.txt; then
    echo "found errors"
fi
```

Don't check `$?` after the command — use the command directly in `if`. `&&` chains success, `||` chains failure: `cmd1 && cmd2 || echo "failed"`.
