+++
title = "awk"
front = "Column-oriented text processing, powerful for tabular data."
category = "utilities"
difficulty = "beginner"
weight = 190
+++

```sh
awk '{print $1}' file.txt        # first column
awk -F, '{print $2}' file.csv    # CSV (comma sep)

# sum column 3
awk '{sum += $3} END {print sum}' data.txt

# filter then print
ps aux | awk '$3 > 1 {print $2, $11}'  # PIDs > 1% CPU
```

When you need to extract or aggregate columns, awk beats grep+sed combinations. `$0` is the whole line, `$1..$N` are fields.
