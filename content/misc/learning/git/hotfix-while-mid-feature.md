+++
title = "Hotfix While Mid-Feature"
front = "Drop your in-progress work to ship an urgent fix, then come back to where you left off. Stash is the key tool here."
category = "workflows"
difficulty = "intermediate"
weight = 430
+++

```sh
# 1. Stash WIP, including any new untracked files
git stash -u

# 2. Branch off latest main
git switch main
git pull
git switch -c hotfix/payment-timeout

# 3. Fix, commit, push, open PR
git commit -am "Increase payment gateway timeout"
git push -u origin hotfix/payment-timeout
gh pr create --fill

# 4. Once merged, resume your feature work
git switch feat/email-validation
git stash pop
```

Hotfixes branch from `main`, not from your feature branch — you don't want to ship half-done feature code with the fix. The `-u` on stash is critical: without it, brand-new files vanish when you switch branches.
