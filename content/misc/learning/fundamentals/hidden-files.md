+++
title = "Hidden Files"
front = "Files starting with `.` are hidden from `ls` by default — used for config and metadata."
category = "files"
difficulty = "beginner"
weight = 70
+++

```sh
ls            # excludes hidden
ls -a         # all (incl. hidden)
ls -la        # long format + hidden

# common ones
.env          # local env vars
.gitignore    # git ignore patterns
.vscode/      # editor config
.DS_Store     # macOS metadata (annoying)
```

Most secret files (`.env`, SSH keys) are dotfiles by convention. Add system noise like `.DS_Store` to a global gitignore so it never sneaks into commits.
