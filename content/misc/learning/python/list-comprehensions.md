+++
title = "List comprehensions"
front = "A list comprehension builds a list from an iterable in a compact way."
category = "patterns"
difficulty = "intermediate"
weight = 240
+++

Example:

```py
squares = [n * n for n in numbers]
evens = [n for n in numbers if n % 2 == 0]
```

Real-world example: transform API results, normalize text, or filter a list without writing a full loop.
