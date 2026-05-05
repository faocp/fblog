+++
title = "JSON"
front = "The standard data format for APIs and config — strings, numbers, booleans, null, arrays, objects."
category = "data"
difficulty = "beginner"
weight = 150
+++

```json
{
  "name": "Felipe",
  "age": 30,
  "active": true,
  "tags": ["admin", "ops"],
  "address": null
}
```

```sh
# validate / pretty-print
cat data.json | jq .
```

```python
# in Python
import json
data = json.loads(raw_string)
```

Strict syntax — keys are always quoted strings, no trailing commas, no comments. When an API returns malformed JSON, `jq` is the fastest way to spot it.
