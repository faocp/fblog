+++
title = "Context managers"
front = "A context manager sets something up and reliably cleans it up afterward."
category = "files"
difficulty = "intermediate"
weight = 230
+++

The `with` statement uses context managers.

Example:

```py
with open("notes.txt") as file:
    text = file.read()
```

Real-world example: files opened with `with` are closed automatically, even if an error happens while reading.
