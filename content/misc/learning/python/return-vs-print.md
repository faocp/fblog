+++
title = "return vs print"
front = "`return` sends a value back to the caller; `print` displays text in the terminal."
category = "functions"
difficulty = "beginner"
weight = 150
+++

Example:

```py
def add(a, b):
    return a + b

result = add(2, 3)
print(result)
```

Real-world example: use `return` when other code needs the result. Use `print` for humans reading terminal output.
