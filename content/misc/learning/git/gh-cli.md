+++
title = "gh CLI"
front = "GitHub's official command-line tool — pairs with git for GitHub-specific tasks."
category = "utilities"
difficulty = "intermediate"
weight = 340
+++

```sh
gh auth login              # one-time setup
gh repo clone owner/name
gh pr create --fill
gh pr checkout 42
gh issue list --assignee @me
gh run watch              # follow CI for current commit
```

Saves the trip to the browser for most PR and CI tasks. Once authenticated, it also handles SSH/HTTPS credentials transparently.
