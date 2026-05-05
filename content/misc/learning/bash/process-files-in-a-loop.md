+++
title = "Process Files in a Loop"
front = "Iterate over matching files and run something on each, with proper handling of edge cases like spaces and nested directories."
category = "workflows"
difficulty = "intermediate"
weight = 410
+++

```sh
#!/usr/bin/env bash
set -euo pipefail
shopt -s nullglob

# simple version (one directory)
for file in logs/*.log; do
    gzip "$file"
done

# with find (handles deep trees + weird names)
find logs -type f -name "*.log" -print0 \
    | while IFS= read -r -d '' file; do
        gzip "$file"
    done
```

Use the simple `for` loop for files in one directory. Switch to `find -print0` when you have nested paths or filenames that might contain spaces, newlines, or quotes.
