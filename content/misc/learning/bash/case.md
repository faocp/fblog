+++
title = "case"
front = "Match a value against multiple patterns — cleaner than long if/elif chains."
category = "control-flow"
difficulty = "beginner"
weight = 130
+++

```sh
case "$1" in
    start)   echo "Starting..." ;;
    stop)    echo "Stopping..." ;;
    restart) echo "Restarting..." ;;
    *.log)   echo "It's a log file" ;;
    *)       echo "Unknown: $1" ;;
esac
```

Patterns support globs, so `*.log` matches any .log file. `*)` is the default catchall — always include it for safety.
