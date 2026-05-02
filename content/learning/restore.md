+++
title = "git restore"
front = "`git restore` discards or unstages changes, depending on the option used."
category = "undo"
difficulty = "beginner"
weight = 200
+++

Examples:

```sh
git restore file.txt
git restore --staged file.txt
```

The first discards unstaged edits in the working tree. The second removes the file from the staging area but keeps your edits.

Real-world example: use it when you staged the wrong file or want to throw away a local experiment.
