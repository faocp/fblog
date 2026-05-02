+++
title = "Quoting"
front = "Quotes control how Bash treats spaces, variables, and special characters."
category = "scripting"
difficulty = "intermediate"
weight = 190
+++

Double quotes allow variable expansion; single quotes keep text literal.

Examples:

```sh
echo "$HOME"
echo '$HOME'
```

Real-world example: quote filenames and variables so paths with spaces do not split into separate arguments.
