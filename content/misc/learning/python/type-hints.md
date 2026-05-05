+++
title = "Type hints"
front = "Type hints document expected value types and help tools catch mistakes."
category = "tooling"
difficulty = "intermediate"
weight = 310
+++

Example:

```py
def greet(name: str) -> str:
    return f"hello, {name}"
```

Python usually does not enforce type hints at runtime, but editors and checkers can use them to find bugs earlier.
