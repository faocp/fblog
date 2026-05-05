+++
title = "self"
front = "`self` refers to the current object inside a class method."
category = "object-oriented"
difficulty = "intermediate"
weight = 280
+++

Example:

```py
class Counter:
    def __init__(self):
        self.count = 0

    def increment(self):
        self.count += 1
```

Real-world example: `self.count` belongs to one specific counter object, not every counter at once.
