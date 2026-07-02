+++
title = "Variables & Types"
front = "Python is dynamically typed: you don't declare types, but they exist at runtime."
category = "basics"
difficulty = "beginner"
weight = 10
+++

```python
name = "Felipe"          # str
age = 30                 # int
ratio = 0.5              # float
active = True            # bool
items = None             # NoneType

type(age)                # <class 'int'>
```

Type hints (`age: int = 30`) are optional but increasingly standard; they help with editor autocomplete and tools like mypy.
