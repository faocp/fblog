+++
title = "Redirection"
front = "Send command output to a file or read input from a file."
category = "files-streams"
difficulty = "beginner"
weight = 110
+++

```sh
command > out.txt           # overwrite
command >> out.txt          # append
command < input.txt         # read from file

# combined
./build.sh > build.log 2>&1 # stdout + stderr to log
./build.sh &> build.log     # shorthand (bash only)
```

`>` overwrites — be careful, no warning. Use `>>` to append. `2>&1` redirects stderr to wherever stdout is currently going.
