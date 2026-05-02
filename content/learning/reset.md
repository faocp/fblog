+++
title = "Reset"
front = "`git reset` moves a branch pointer and can also change the staging area or working tree."
category = "undo"
difficulty = "intermediate"
weight = 220
+++

Common modes:

- `--soft`: keep changes staged
- `--mixed`: keep changes unstaged
- `--hard`: discard changes

Real-world example: use `git reset --soft HEAD~1` to undo your last local commit but keep its changes ready to recommit with a better message.
