+++
title = "Iterating Patterns"
front = "enumerate, zip, and dict.items() cover most iteration needs."
category = "data-structures"
difficulty = "beginner"
weight = 110
+++

```python
names = ["Ana", "Bob", "Cy"]
ages = [30, 25, 28]

for i, name in enumerate(names):
    print(i, name)

for name, age in zip(names, ages):
    print(name, age)

for k, v in config.items():
    print(k, v)
```

These three handle 90% of iteration patterns. `zip` stops at the shortest iterable.
