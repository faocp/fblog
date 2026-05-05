+++
title = "Code Review Iteration"
front = "Push follow-up changes in response to PR review comments. GitHub will automatically update the PR each time you push."
category = "workflows"
difficulty = "intermediate"
weight = 230
+++

```sh
# Option A: separate commits (easier to follow review thread)
git add src/auth.js
git commit -m "Address review: trim whitespace"
git push

# Option B: amend previous commit (cleaner final history)
git add src/auth.js
git commit --amend --no-edit
git push --force-with-lease
```

Option A is friendlier for reviewers: they can see exactly what changed since their last review. Option B is fine if your team squash-merges anyway, since intermediate commits get collapsed at merge time.
