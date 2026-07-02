+++
title = "Comprehensions"
front = "Concise way to build a list, dict, or set from an iterable."
category = "data-structures"
difficulty = "beginner"
weight = 100
+++

```python
# list comprehension
evens = [x for x in range(10) if x % 2 == 0]

# dict comprehension
squares = {x: x**2 for x in range(5)}

# filter + transform
names = [u["name"].upper() for u in users if u["active"]]
```

Readable for simple cases. If a comprehension grows past one line or has nested loops, use a regular for-loop instead.
