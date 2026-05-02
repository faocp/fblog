+++
title = "Tag"
front = "A tag is a named pointer to a specific commit, often used for releases."
category = "history"
difficulty = "intermediate"
weight = 250
+++

Tags are useful when one commit deserves a permanent label like `v1.0.0`.

Real-world example: after deploying version 1.2.0, create a tag so you can later find exactly which code was released:

```sh
git tag v1.2.0
git push origin v1.2.0
```
