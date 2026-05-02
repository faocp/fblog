+++
title = "Command substitution"
front = "Command substitution inserts the output of one command into another command."
category = "scripting"
difficulty = "intermediate"
weight = 200
+++

Use `$(...)` for command substitution.

Example:

```sh
today=$(date +%Y-%m-%d)
echo "backup-$today.tar.gz"
```

Real-world example: generate filenames, commit messages, or reports that include the current date or Git branch.
