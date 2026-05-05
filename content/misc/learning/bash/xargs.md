+++
title = "xargs"
front = "Build commands from stdin — useful for chaining `find` to other commands."
category = "utilities"
difficulty = "beginner"
weight = 200
+++

```sh
find . -name "*.tmp" | xargs rm

# safer: handles spaces in filenames
find . -name "*.tmp" -print0 | xargs -0 rm

# one item per call with placeholder
ls *.jpg | xargs -I {} mv {} processed/

# parallel
cat urls.txt | xargs -P 4 -I {} curl -sO {}
```

Always use `-print0` + `-0` when filenames might have spaces. `-P N` runs N commands in parallel — handy for I/O-bound tasks like batch downloads.
