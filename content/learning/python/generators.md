+++
title = "Generators"
front = "A generator produces values lazily, one at a time, instead of building a whole list."
category = "patterns"
difficulty = "intermediate"
weight = 300
+++

Example:

```py
def countdown(n):
    while n > 0:
        yield n
        n -= 1
```

Real-world example: generators are useful for processing large files or streams because they do not need to keep every value in memory.
