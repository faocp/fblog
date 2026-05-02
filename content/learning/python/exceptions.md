+++
title = "Exceptions"
front = "An exception is an error or unusual event that interrupts normal program flow."
category = "errors"
difficulty = "beginner"
weight = 210
+++

Example:

```py
try:
    number = int(text)
except ValueError:
    number = 0
```

Real-world example: handle invalid user input, missing files, or failed network requests without crashing the whole program.
