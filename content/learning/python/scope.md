+++
title = "Scope"
front = "Scope determines where a name can be used."
category = "functions"
difficulty = "intermediate"
weight = 160
+++

Variables created inside a function are local to that function.

Example:

```py
def greet():
    message = "hello"
    return message
```

Real-world example: local scope helps functions avoid accidentally changing unrelated parts of a program.
