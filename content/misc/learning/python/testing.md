+++
title = "Testing"
front = "Tests are code that checks whether your code behaves as expected."
category = "tooling"
difficulty = "intermediate"
weight = 320
+++

Example:

```py
def test_add():
    assert add(2, 3) == 5
```

Real-world example: tests protect you when refactoring, because they reveal when a change accidentally breaks existing behavior.
