+++
title = "Globbing"
front = "Globs are wildcard patterns Bash expands into matching filenames."
category = "files"
difficulty = "beginner"
weight = 110
+++

Common patterns:

```sh
*.md       # all Markdown files
img-?.png  # img-a.png, img-1.png, etc.
```

Real-world example: `rm *.log` removes all files ending in `.log` in the current directory, so run `ls *.log` first if you are unsure.
