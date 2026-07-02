+++
title = "Absolute vs Relative Paths"
front = "Absolute paths start from `/`; relative paths start from your current working directory."
category = "files"
difficulty = "beginner"
weight = 80
+++

```sh
/etc/hosts             # absolute: same anywhere
./config.json          # relative: depends on cwd
../shared/lib          # parent + descend
~/.config              # home-relative

# in a script: anchor to script's directory
cd "$(dirname "$0")"
```

Relative paths break when scripts are invoked from elsewhere. Cron, systemd, and CI all run from unexpected directories; always use absolute paths or anchor the script's location.
