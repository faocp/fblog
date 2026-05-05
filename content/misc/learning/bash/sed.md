+++
title = "sed"
front = "Stream editor for find/replace and basic transforms on text."
category = "utilities"
difficulty = "beginner"
weight = 180
+++

```sh
sed 's/foo/bar/' file.txt        # first per line
sed 's/foo/bar/g' file.txt       # all
sed -i '' 's/foo/bar/g' file     # in-place (macOS)
sed -i 's/foo/bar/g' file        # in-place (Linux)

sed -n '10,20p' file.txt         # print lines 10-20
```

macOS sed differs from GNU sed; `-i` needs an empty argument on macOS (`-i ''`). For anything complex, reach for awk or a real language.
