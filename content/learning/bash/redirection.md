+++
title = "Redirection"
front = "Redirection sends command input or output to files instead of the terminal."
category = "io"
difficulty = "beginner"
weight = 120
+++

Examples:

```sh
echo "hello" > hello.txt
echo "again" >> hello.txt
sort < names.txt
```

`>` overwrites, `>>` appends, and `<` reads input from a file.
