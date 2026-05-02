+++
title = "Functions"
front = "A Bash function names a reusable group of commands."
category = "scripting"
difficulty = "intermediate"
weight = 260
+++

Example:

```sh
greet() {
  echo "hello, $1"
}

greet "felipe"
```

Real-world example: put repeated deployment or cleanup steps into functions so scripts are easier to read and change.
