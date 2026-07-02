+++
title = "Loops"
front = "Iterate over sequences with for, repeat conditions with while."
category = "basics"
difficulty = "beginner"
weight = 40
+++

```python
for item in items:
    print(item)

for i, item in enumerate(items):
    print(f"{i}: {item}")

for key, value in config.items():
    print(f"{key} = {value}")

while queue:
    process(queue.pop())
```

`enumerate` for index+value, `.items()` for dict pairs, `zip` for parallel iteration. Avoid `for i in range(len(items))`; it's a code smell.
