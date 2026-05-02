+++
title = "Environment variables"
front = "Environment variables are variables inherited by child processes."
category = "scripting"
difficulty = "intermediate"
weight = 180
+++

Use `export` to make a variable available to commands you run from the shell.

Example:

```sh
export NODE_ENV=production
```

Real-world example: tools often read configuration from environment variables, such as `PATH`, `HOME`, `EDITOR`, or API keys.
