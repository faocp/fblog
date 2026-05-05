+++
title = "Rebase"
front = "Replays your commits on top of another branch for a linear history."
category = "branching"
difficulty = "intermediate"
weight = 130
+++

```sh
git switch feature-x
git rebase main
```

Used to keep your feature branch up-to-date with main. Don't rebase branches others are working on — it rewrites history and forces collaborators to reset their local copies.
