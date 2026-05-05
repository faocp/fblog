+++
title = "None"
front = "`None` represents the absence of a value."
category = "data"
difficulty = "beginner"
weight = 260
+++

Use `is None` instead of `== None`. `None` is a singleton (only one `None` object exists in a Python program), so identity (`is`) is the canonical and override-proof check.

Example:

```py
if result is None:
    print("nothing found")
```

Real-world example: a lookup function might return `None` when it cannot find a matching user.
