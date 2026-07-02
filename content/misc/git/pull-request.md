+++
title = "Pull Request"
front = "A GitHub feature for proposing a merge from one branch into another, with discussion, review, and CI checks."
category = "remote"
difficulty = "beginner"
weight = 150
+++

```sh
# After pushing your branch:
gh pr create --fill          # uses last commit as title/body
gh pr view --web             # open in browser
gh pr list
gh pr checkout 142           # review someone else's PR locally
```

PRs are where code review and CI run. Most teams use squash-merge to keep `main`'s history one commit per PR.
