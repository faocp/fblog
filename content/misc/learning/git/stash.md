+++
title = "git stash"
front = "Temporarily shelves uncommitted changes so you can switch contexts."
category = "utilities"
difficulty = "beginner"
weight = 170
+++

```sh
git stash -u            # save WIP, including new files
git switch hotfix
# ...do urgent work...
git switch feature-x
git stash pop           # restore WIP
```

Perfect for the "I need to fix prod *right now*" moment. The `-u` flag matters: without it, untracked files won't be saved.
