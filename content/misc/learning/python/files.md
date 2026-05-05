+++
title = "File I/O"
front = "Read and write files with the `with` statement to auto-close."
category = "utilities"
difficulty = "beginner"
weight = 190
+++

```python
# read
with open("data.txt") as f:
    content = f.read()

# read line by line
with open("log.txt") as f:
    for line in f:
        process(line.strip())

# write
with open("out.txt", "w") as f:
    f.write("hello\n")
```

Always use `with`; it closes the file even on errors. For JSON, use `json.load(f)` / `json.dump(data, f)`.
