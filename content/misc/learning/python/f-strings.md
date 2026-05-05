+++
title = "f-strings"
front = "The modern way to interpolate values into strings."
category = "basics"
difficulty = "beginner"
weight = 20
+++

```python
name = "Felipe"
count = 42

print(f"Hello, {name}!")
print(f"Found {count} items")
print(f"Ratio: {count / 100:.2f}")    # formatting
print(f"{name=}")                      # → name='Felipe'
```

Always prefer f-strings over `.format()` or `%` formatting. The `=` debug syntax is great for quick logging.
