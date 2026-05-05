+++
title = "Control Flow"
front = "Conditional execution with if/elif/else. Indentation defines blocks; there are no braces."
category = "basics"
difficulty = "beginner"
weight = 30
+++

```python
status = response.status_code

if status == 200:
    print("OK")
elif status < 500:
    print("Client error")
else:
    print("Server error")

# ternary
msg = "OK" if status == 200 else "Error"
```

Standard indent is 4 spaces, never tabs. Most editors (and tools like ruff/black) enforce this automatically.
