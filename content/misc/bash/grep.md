+++
title = "grep"
front = "Search for patterns in files or stdin."
category = "utilities"
difficulty = "beginner"
weight = 160
+++

```sh
grep "ERROR" app.log
grep -i "warning" *.log     # case-insensitive
grep -r "TODO" .            # recursive
grep -v "DEBUG" app.log     # invert (NOT matching)
grep -c "ERROR" app.log     # count
grep -n "ERROR" app.log     # show line numbers
grep -E "^(error|warn)" log # extended regex
```

`grep -rn pattern .` to search a project with line numbers, your daily driver. If `rg` (ripgrep) is installed, use it instead: it is much faster and respects .gitignore.
