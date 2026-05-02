+++
title = "touch and mkdir"
front = "`touch` updates a file's timestamp, or creates it empty if it does not exist; `mkdir` creates a directory."
category = "files"
difficulty = "beginner"
weight = 90
+++

Examples:

```sh
touch notes.txt
mkdir drafts
mkdir -p posts/new-post
```

`mkdir -p` creates parent directories as needed and does not error if they already exist.
