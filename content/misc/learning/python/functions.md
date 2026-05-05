+++
title = "Functions"
front = "Reusable blocks of logic with arguments and an optional return value."
category = "basics"
difficulty = "beginner"
weight = 50
+++

```python
def greet(name: str, greeting: str = "Hello") -> str:
    return f"{greeting}, {name}!"

greet("Felipe")                  # uses default
greet("Felipe", greeting="Hey")  # keyword arg

# *args and **kwargs
def log(*args, **kwargs):
    print(args, kwargs)
```

Use type hints in any code others will read. Default arguments must be immutable — never `def f(x=[])` (it's shared across calls).
