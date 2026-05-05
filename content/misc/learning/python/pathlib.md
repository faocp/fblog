+++
title = "pathlib"
front = "Object-oriented file paths — modern replacement for `os.path`."
category = "utilities"
difficulty = "beginner"
weight = 210
+++

```python
from pathlib import Path

p = Path("data") / "users.json"     # joining
p.exists()
p.parent                            # Path("data")
p.suffix                            # ".json"
p.read_text()
p.write_text("hello")

for f in Path(".").glob("*.py"):
    print(f)
```

The `/` operator for joining paths is way cleaner than `os.path.join`. Works on all platforms — handles Windows backslashes for you.
