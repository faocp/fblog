+++
title = "None & Truthiness"
front = "Empty containers, 0, and None all evaluate as False in conditions."
category = "basics"
difficulty = "beginner"
weight = 60
+++

```python
items = []
if not items:
    print("empty")

value = config.get("key")     # returns None if missing
if value is None:
    value = "default"

# short version
value = config.get("key") or "default"
```

Always use `is None` / `is not None` to compare with None; `==` works but is non-idiomatic.
