+++
title = "Background Jobs"
front = "Run commands asynchronously and manage long-running processes."
category = "workflows"
difficulty = "intermediate"
weight = 430
+++

```sh
# run in background
long-task &

# capture PID, wait for it
long-task &
pid=$!
wait "$pid"

# multiple in parallel, wait for all
task1 & task2 & task3 &
wait

# survive logout
nohup long-task > out.log 2>&1 &

# see all background jobs
jobs
```

`&` backgrounds; `wait` blocks until done; `nohup` detaches from the terminal so the process survives the shell exiting. For anything long-running and important, use a proper supervisor (systemd, launchd, supervisord).
