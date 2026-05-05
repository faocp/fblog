+++
title = "Merge Conflict"
front = "Happens when two branches change the same lines and git can't auto-resolve."
category = "branching"
difficulty = "intermediate"
weight = 120
+++

```sh
# open files with <<<<<<< markers
# edit to keep what you want
git add <file>
git commit
```

Most editors highlight conflicts and offer "accept current/incoming/both" buttons. Test before committing the resolution — a clean merge isn't the same as a working one.
