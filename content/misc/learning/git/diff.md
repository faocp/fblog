+++
title = "git diff"
front = "See line-by-line changes."
category = "basics"
difficulty = "beginner"
weight = 60
+++

```sh
git diff                # unstaged changes
git diff --staged       # what would commit
git diff main..feature  # between branches
```

Always review the diff before committing — it catches stray `console.log`s and accidental edits faster than any reviewer.
