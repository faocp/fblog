+++
title = "while loops"
front = "Repeat while a condition holds. Most useful for reading input line-by-line and polling."
category = "control-flow"
difficulty = "beginner"
weight = 90
+++

```sh
# read a file line by line
while IFS= read -r line; do
    echo "Line: $line"
done < input.txt

# poll until something happens
while ! curl -sf http://localhost:8080/health; do
    echo "Waiting for service..."
    sleep 2
done
```

`IFS= read -r` is the canonical safe way to read lines — it preserves whitespace and treats backslashes literally.
