+++
title = "Cron / Scheduled Tasks"
front = "Run scripts on a schedule. Cron is the standard Unix scheduler and is everywhere."
category = "workflows"
difficulty = "intermediate"
weight = 260
+++

```sh
# edit your crontab
crontab -e

# format: m h dom mon dow command
0 2 * * *     /usr/local/bin/backup.sh
*/15 * * * *  /usr/local/bin/healthcheck.sh
0 9 * * 1-5   /usr/local/bin/daily-report.sh

# show your jobs
crontab -l

# always log output for debugging
0 2 * * * /path/to/script.sh >> /var/log/script.log 2>&1
```

Cron runs with a minimal environment, so always use absolute paths and explicitly redirect output. Test scripts with `bash -l -c "command"` to mimic cron's environment. On modern Linux, systemd timers are an alternative with better logging.
