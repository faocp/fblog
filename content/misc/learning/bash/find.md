+++
title = "find"
front = "Locate files by name, type, modification time, or other attributes."
category = "utilities"
difficulty = "beginner"
weight = 310
+++

```sh
find . -name "*.py"
find . -type f -name "*.log"
find . -type d -name "node_modules" -prune
find . -mtime -7              # modified in last 7 days
find . -size +10M             # larger than 10MB
find . -name "*.tmp" -delete  # find + delete
```

Test with `-print` first before adding `-delete` or `-exec rm`. The `-prune` trick excludes whole directories from the search.
