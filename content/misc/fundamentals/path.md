+++
title = "PATH"
front = "A colon-separated list of directories the shell searches when you type a command name."
category = "shell"
difficulty = "beginner"
weight = 30
+++

```sh
echo "$PATH"
# /usr/local/bin:/usr/bin:/bin:/Users/felipe/.local/bin

which python          # find which one you're running
which -a python       # all matches in PATH

# add a directory (prepend)
export PATH="$HOME/bin:$PATH"
```

Order matters: the shell uses the first match. Prepend to override system tools. When "command not found" hits a binary you know exists, PATH is usually why.
