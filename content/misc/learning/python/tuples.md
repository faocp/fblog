+++
title = "Tuples & Sets"
front = "Tuples are immutable lists; sets are unordered collections of unique items."
category = "data-structures"
difficulty = "beginner"
weight = 90
+++

```python
# tuples: fixed structure
point = (10, 20)
x, y = point                 # unpacking

# sets: uniqueness, fast membership tests
seen = {1, 2, 3}
seen.add(4)
2 in seen                    # True (O(1))
list(set(items))             # dedupe a list
```

Tuples for fixed records (coordinates, multiple return values). Sets when you need uniqueness or fast `in` checks.
