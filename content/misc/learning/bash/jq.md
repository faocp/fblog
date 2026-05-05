+++
title = "jq"
front = "Like sed/awk for JSON. Essential for working with APIs and structured logs."
category = "utilities"
difficulty = "beginner"
weight = 210
+++

```sh
curl -s api.example.com/users | jq '.'
curl -s api.example.com/users | jq '.[0].name'
curl -s api.example.com/users | jq '.[] | .email'
curl -s api.example.com/users | jq 'map(select(.active))'

# raw (unquoted) string output
jq -r '.token' response.json
```

`-r` removes JSON quoting from string output, which is needed when piping into other commands. `jq '.'` alone pretty-prints any JSON. Not always pre-installed; `brew install jq` or `apt install jq`.
