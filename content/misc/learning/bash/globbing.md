+++
title = "Globs & Wildcards"
front = "Pattern matching for filenames."
category = "files-streams"
difficulty = "beginner"
weight = 240
+++

```sh
ls *.py              # all .py in cwd
ls **/*.py           # recursive (needs shopt -s globstar)
ls report_?.txt      # exactly one char
ls log[0-9].txt      # one digit

shopt -s nullglob    # no match → empty list (safer)
```

Without `nullglob`, `for f in *.log` will iterate once with the literal string `*.log` if no files match. Set it at the top of any script that loops over globs.
