+++
title = "Iterables"
front = "An iterable is anything Python can loop over."
category = "patterns"
difficulty = "intermediate"
weight = 290
+++

Lists, strings, dictionaries, sets, tuples, files, and generators are iterable.

Example:

```py
for character in "hello":
    print(character)
```

Real-world example: many Python tools accept any iterable, making functions flexible without requiring a specific collection type.
