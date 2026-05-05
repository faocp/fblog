+++
title = "Tags"
front = "Named pointers to specific commits, used for releases."
category = "utilities"
difficulty = "beginner"
weight = 190
+++

```sh
git tag v1.0.0
git tag -a v1.0.0 -m "First public release"
git push origin v1.0.0
```

Mark release versions or deployment milestones. GitHub Actions and other CI systems often trigger off tag pushes.
