+++
title = "Rebase"
front = "`git rebase` reapplies commits on top of another base commit."
category = "history"
difficulty = "intermediate"
weight = 240
+++

Rebase can make history look linear, as if your work started from the latest version of the target branch.

Real-world example: before opening a pull request, rebase your feature branch onto updated `main` so your commits sit cleanly after the latest main commits.

Avoid rebasing public/shared commits unless your team agrees, because it rewrites commit IDs.
