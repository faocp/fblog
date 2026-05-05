+++
title = "Debug"
front = "Three escalating tools — print, breakpoint, and logging. Each is appropriate at different times."
category = "workflows"
difficulty = "intermediate"
weight = 270
+++

```python
# 1. print debugging — quick and dirty
print(f"{user=} {response.status=}")

# 2. drop into pdb at any line
breakpoint()                # then: n, s, c, p var, q

# 3. logging — for real apps
import logging
logging.basicConfig(level=logging.DEBUG)
log = logging.getLogger(__name__)
log.debug("payload: %s", payload)
```

`breakpoint()` is built into Python 3.7+ — it pauses execution so you can inspect state interactively. For production code use logging, never print, so output can be configured per environment.
