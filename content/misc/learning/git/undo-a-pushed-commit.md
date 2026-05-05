+++
title = "Undo a Pushed Commit"
front = "Reverse a bad commit that's already on GitHub without rewriting shared history. The safe approach is to add a new commit that cancels out the old one."
category = "workflows"
difficulty = "intermediate"
weight = 260
+++

```sh
# 1. Find the bad commit
git log --oneline

# 2. Create a new commit that undoes it
git revert <commit-hash>

# 3. Push the revert
git push
```

`revert` is safe on shared branches: it adds a new commit instead of erasing the old one. Avoid `git reset --hard` + `--force` on any branch others may have pulled; you'll cause confusion and lost work.
