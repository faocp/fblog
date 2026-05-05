+++
title = "Standard Library"
front = "Modules you'll reach for constantly: pathlib, json, os, datetime, re."
category = "modules-env"
difficulty = "beginner"
weight = 180
+++

```python
from pathlib import Path
import json, os, re
from datetime import datetime, timedelta

Path("config.json").read_text()
json.loads(raw)
os.environ.get("API_KEY")
datetime.now() - timedelta(days=7)
re.match(r"^\d+$", "123")
```

Prefer `pathlib` over the older `os.path`. `os.environ` for env vars. `json` for parsing API responses and config files.
