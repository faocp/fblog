+++
title = "argparse"
front = "Build CLI tools with parsed flags and positional arguments."
category = "utilities"
difficulty = "beginner"
weight = 230
+++

```python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument("filename")
parser.add_argument("--verbose", "-v", action="store_true")
parser.add_argument("--limit", type=int, default=10)

args = parser.parse_args()
print(args.filename, args.verbose, args.limit)
```

Auto-generates `--help` text. For richer CLIs (subcommands, colored output), libraries like `click` or `typer` are popular alternatives.
