+++
title = "Error Handling"
front = "try/except catches exceptions; handle specific ones, not bare `except`."
category = "utilities"
difficulty = "beginner"
weight = 200
+++

```python
try:
    data = json.loads(raw)
except json.JSONDecodeError as e:
    print(f"Bad JSON: {e}")
    data = {}
except Exception as e:
    logger.exception("Unexpected error")
    raise
finally:
    cleanup()
```

Catch specific exceptions when you can recover. Bare `except:` hides bugs. Use `logger.exception` to capture the full traceback.
