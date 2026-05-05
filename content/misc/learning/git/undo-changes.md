+++
title = "Undo Changes"
front = "Discard, unstage, or rewind — depending on how far back you went."
category = "utilities"
difficulty = "intermediate"
weight = 320
+++

```sh
git restore file.js          # discard local edits
git restore --staged file.js # unstage
git reset --soft HEAD~1      # undo last commit, keep changes
git reset --hard HEAD~1      # ⚠️ delete last commit + changes
```

`--soft` is safe and useful for amending. `--hard` is destructive — only use locally, never on pushed commits.
