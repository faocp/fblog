+++
title = "Daily Push Flow"
front = "The end-to-end loop for adding a feature or fix and getting it merged into main on GitHub."
category = "workflows"
difficulty = "intermediate"
weight = 400
+++

```sh
# 1. Start from a fresh main
git switch main
git pull

# 2. Create a branch for your work
git switch -c feat/email-validation

# 3. Make changes, then commit in logical chunks
git add src/auth.js
git diff --staged              # review before committing
git commit -m "Validate email format on signup"

# 4. Push and open a PR
git push -u origin feat/email-validation
gh pr create --fill
```

Always branch from an up-to-date main. Push early — even on rough work — so teammates can see progress and CI runs sooner. The PR is where review and merging happen, not your local machine.
