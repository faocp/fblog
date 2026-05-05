+++
title = "Sync Branch with Main"
front = "Bring the latest changes from main into your in-progress feature branch. Run this every day or two so your PR doesn't drift behind and accumulate conflicts."
category = "workflows"
difficulty = "intermediate"
weight = 220
+++

```sh
# 1. Update your local main
git switch main
git pull

# 2. Replay your feature work on top of latest main
git switch feat/email-validation
git rebase main

# 3. If there are conflicts, edit the files, then:
git add <resolved-files>
git rebase --continue

# 4. Push the rewritten branch
git push --force-with-lease
```

`--force-with-lease` is the safe variant of `--force` — it refuses to overwrite commits you haven't seen. If you prefer to avoid history rewrites, `git merge main` into your branch works too, but creates an extra merge commit.
