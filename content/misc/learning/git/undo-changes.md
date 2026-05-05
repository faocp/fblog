+++
title = "Undo Changes"
front = "Discard, unstage, or rewind, depending on how far back you need to go."
category = "utilities"
difficulty = "beginner"
weight = 180
+++

```sh
git restore file.js          # discard local edits
git restore --staged file.js # unstage
git reset --soft HEAD~1      # undo last commit, keep changes
git reset --hard HEAD~1      # ⚠️ delete last commit + changes
```

`--soft` is safe and useful for amending. `--hard` is destructive: only use it locally, never on pushed commits.
