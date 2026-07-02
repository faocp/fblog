+++
title = "Home & Working Directory"
front = "`~` expands to your home dir; `.` is current; `..` is parent. The shell tracks a current working directory (cwd)."
category = "shell"
difficulty = "beginner"
weight = 50
+++

```sh
pwd                    # /Users/felipe/projects/api
cd ~                   # home
cd ~/Documents         # absolute via home
cd ../sibling-dir      # relative
cd -                   # previous dir
```

Scripts often misbehave when run from a different working directory. To anchor a script to its own location, put `cd "$(dirname "$0")"` at the top.
