+++
title = "Find What's Running on a Port"
front = "A common debugging task: figuring out which process owns a port and freeing it."
category = "workflows"
difficulty = "intermediate"
weight = 190
+++

```sh
# who's on port 3000?
lsof -i :3000
# COMMAND   PID    USER   ...
# node     12345  felipe ...

# alternatives
netstat -anv | grep 3000     # macOS
ss -tulpn | grep 3000        # Linux

# kill it (gentle, sends SIGTERM)
kill 12345

# kill it (force, sends SIGKILL)
kill -9 12345

# one-liner: kill whatever's on a port
lsof -ti :3000 | xargs kill
```

After a crashed dev server you'll often see "address already in use". This is the fix. Try `kill` (SIGTERM) first; only escalate to `kill -9` (SIGKILL) if the process won't stop.
