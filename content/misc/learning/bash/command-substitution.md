+++
title = "Command Substitution"
front = "Capture the output of a command into a variable."
category = "basics"
difficulty = "beginner"
weight = 40
+++

```sh
today="$(date +%Y-%m-%d)"
branch="$(git rev-parse --abbrev-ref HEAD)"
count="$(ls *.txt | wc -l)"

echo "Backup-${today}-${branch}.tar.gz"
```

Always use `$(...)` not backticks; it nests cleanly and is easier to read in any non-trivial expression.
