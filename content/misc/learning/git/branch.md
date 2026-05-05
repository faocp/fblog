+++
title = "Branch"
front = "A movable pointer to a series of commits, used to isolate work."
category = "branching"
difficulty = "beginner"
weight = 70
+++

```sh
git switch -c feature-auth   # create + switch
git switch main              # back to main
git branch -d feature-auth   # delete
```

One branch per feature or fix. Keep `main` always deployable: it should reflect what is in production.
