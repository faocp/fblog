+++
title = "Lists"
front = "Ordered, mutable sequence: your default choice for collections."
category = "data-structures"
difficulty = "beginner"
weight = 70
+++

```python
items = [1, 2, 3]
items.append(4)              # [1, 2, 3, 4]
items[0]                     # 1
items[-1]                    # 4 (last)
items[1:3]                   # [2, 3] (slice)
len(items)                   # 4
[x * 2 for x in items]       # comprehension
```

Slicing is one of Python's superpowers: `[start:end:step]`. Negative indices count from the end.
