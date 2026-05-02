+++
title = "xargs"
front = "`xargs` turns input text into command arguments."
category = "commands"
difficulty = "intermediate"
weight = 270
+++

Example:

```sh
find . -name "*.log" | xargs rm
```

Real-world example: combine `find`, `grep`, or other commands with tools that expect filenames as arguments. Be cautious with spaces in filenames; many cases are safer with `find ... -print0 | xargs -0 ...`.
