+++
title = "Revert"
front = "`git revert` creates a new commit that undoes an earlier commit."
category = "utilities"
difficulty = "intermediate"
weight = 325
+++

Revert is safe for shared branches because it does not rewrite history. It adds another commit saying "undo that change."

Real-world example: if a commit on `main` broke production, revert it so everyone sees the fix as a normal new commit.
