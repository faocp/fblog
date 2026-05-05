+++
title = "subprocess"
front = "Run shell commands from Python and capture output."
category = "utilities"
difficulty = "beginner"
weight = 220
+++

```python
import subprocess

result = subprocess.run(
    ["git", "status", "--short"],
    capture_output=True,
    text=True,
    check=True,
)
print(result.stdout)
```

Always pass arguments as a list (not a string) to avoid shell injection. `check=True` raises on non-zero exit codes, saving you from silent failures.
