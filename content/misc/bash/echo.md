+++
title = "echo & printf"
front = "`echo` for simple output, `printf` when you need formatting or precise control."
category = "basics"
difficulty = "beginner"
weight = 30
+++

```sh
echo "Hello, world"
echo -n "no newline"

printf "%s is %d years old\n" "$name" "$age"
printf "%.2f\n" 3.14159          # → 3.14
printf "[%-10s]\n" "left"        # → [left      ]
```

Prefer `printf` in scripts; `echo`'s behavior with flags varies between systems. `printf` is portable and POSIX-standard.
