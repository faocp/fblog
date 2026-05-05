+++
title = "Environment Variables"
front = "Key-value pairs that exist in your shell's environment and are inherited by programs you run from it."
category = "shell"
difficulty = "beginner"
weight = 20
+++

```sh
# set for current shell
export API_KEY="sk-..."
export DATABASE_URL="postgres://..."

# use in commands
echo "$API_KEY"
curl -H "Authorization: Bearer $API_KEY" ...

# see all env vars
env
printenv API_KEY

# inline (set just for one command)
DEBUG=1 ./script.sh
```

Programs read env vars at startup: the standard pattern for config that varies between machines (API keys, database URLs, debug flags). `export` makes the variable available to child processes; without it, only the current shell sees it.
