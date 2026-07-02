+++
title = "curl Basics"
front = "The standard tool for making HTTP requests from the command line."
category = "network"
difficulty = "beginner"
weight = 110
+++

```sh
curl https://api.example.com/users     # GET
curl -i https://...                    # include headers
curl -s https://...                    # silent (no progress)

curl -X POST https://api.example.com/users \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $API_KEY" \
  -d '{"name": "Felipe"}'

# download to file
curl -o output.json https://...
```

`-s` for clean output you can pipe to `jq`. `-i` to debug headers. For repeated/complex requests, save to a script or use `httpie` for friendlier syntax.
