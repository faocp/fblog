+++
title = "Loops"
front = "Loops repeat commands for multiple items or while a condition is true."
category = "scripting"
difficulty = "intermediate"
weight = 250
+++

Example:

```sh
for file in *.md; do
  echo "$file"
done
```

Real-world example: run the same conversion, lint, or cleanup command across many files without typing each filename manually.
