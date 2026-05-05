+++
title = "for loops"
front = "Iterate over a list, range, or files matching a glob."
category = "control-flow"
difficulty = "beginner"
weight = 110
+++

```sh
# over a list
for env in dev staging prod; do
    echo "Deploying to $env"
done

# over files
for file in *.log; do
    gzip "$file"
done

# numeric range
for i in {1..5}; do
    echo "Attempt $i"
done
```

Always quote `"$file"` in case filenames have spaces. For C-style loops use `for ((i=0; i<10; i++))`.
