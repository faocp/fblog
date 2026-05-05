+++
title = "Merge"
front = "Pulls another branch's changes into your current one."
category = "branching"
difficulty = "beginner"
weight = 110
+++

```sh
git switch main
git merge feature-auth
```

On GitHub, merging usually happens through the PR "Merge" button rather than locally — that way CI and review approval are enforced before code lands on `main`.
