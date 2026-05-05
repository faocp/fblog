+++
title = "localhost & Ports"
front = "localhost (127.0.0.1) is your own machine; ports identify which program receives the connection."
category = "network"
difficulty = "beginner"
weight = 100
+++

```sh
# standard local URLs
http://localhost:3000        # web dev server
http://127.0.0.1:8080        # equivalent

# what's listening?
lsof -i :3000                # who has port 3000?
lsof -i -P -n | grep LISTEN  # all listening

# kill the process holding a port
lsof -ti :3000 | xargs kill
```

Common dev ports: 3000 (Node/React), 5173 (Vite), 8000/8080 (general), 5432 (Postgres), 6379 (Redis). When you see "address already in use", another process owns that port.
