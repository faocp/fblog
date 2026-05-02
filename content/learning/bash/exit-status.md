+++
title = "Exit status"
front = "Every command exits with a status code: `0` means success, non-zero usually means failure."
category = "scripting"
difficulty = "intermediate"
weight = 210
+++

The special variable `$?` stores the exit status of the last command.

Real-world example: scripts use exit statuses to decide whether to continue, retry, or stop after a failed command.
