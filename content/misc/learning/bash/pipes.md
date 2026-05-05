+++
title = "Pipes"
front = "Connect the stdout of one command to the stdin of the next."
category = "files-streams"
difficulty = "beginner"
weight = 210
+++

```sh
ps aux | grep python | grep -v grep

cat access.log \
  | awk '{print $7}' \
  | sort | uniq -c \
  | sort -rn | head

git log --oneline | wc -l       # commit count
```

Pipes are how Unix tools compose. Each tool does one thing — chain them to build pipelines that would be pages of code in other languages.
