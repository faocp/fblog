+++
title = "stdin / stdout / stderr"
front = "File descriptors 0, 1, 2: input, normal output, error output."
category = "files-streams"
difficulty = "beginner"
weight = 140
+++

```sh
# send errors to a file
./build.sh 2> errors.log

# discard noise
find / -name "*.log" 2> /dev/null

# only errors, throw away stdout
./build.sh > /dev/null 2> errors.log

# write to stderr from your script
echo "Warning: file missing" >&2
```

`/dev/null` is the bit bucket; anything sent there disappears. Print errors to stderr (`>&2`) so they show up even when stdout is piped or redirected.
