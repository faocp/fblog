+++
title = "Read JSON Config"
front = "A common pattern: parse a JSON config file with sensible error handling and fallback to defaults."
category = "workflows"
difficulty = "intermediate"
weight = 260
+++

```python
import json
from pathlib import Path

CONFIG_PATH = Path.home() / ".myapp" / "config.json"
DEFAULTS = {"theme": "dark", "port": 8080}

def load_config() -> dict:
    if not CONFIG_PATH.exists():
        return DEFAULTS
    try:
        user = json.loads(CONFIG_PATH.read_text())
        return {**DEFAULTS, **user}
    except json.JSONDecodeError as e:
        print(f"Invalid config: {e}")
        return DEFAULTS
```

Merge defaults with user config so missing keys fall back gracefully. For richer validation (types, required fields), reach for pydantic.
