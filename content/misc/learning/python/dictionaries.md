+++
title = "Dictionaries"
front = "Key-value mapping with O(1) lookup."
category = "data-structures"
difficulty = "beginner"
weight = 80
+++

```python
user = {"name": "Felipe", "role": "admin"}
user["name"]                  # "Felipe"
user.get("email", "N/A")      # safe lookup with default
user["email"] = "f@x.com"     # add/update

for key, value in user.items():
    print(key, value)
```

Use `.get()` to avoid KeyError when a key might be missing. Dicts preserve insertion order since 3.7.
