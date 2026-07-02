+++
title = "Shebang & Permissions"
front = "The shebang line tells the OS which interpreter to use; the file must be executable."
category = "basics"
difficulty = "beginner"
weight = 60
+++

```sh
#!/usr/bin/env bash
# script.sh
echo "Hello from $(basename "$0")"

# make it runnable
chmod +x script.sh
./script.sh
```

Use `#!/usr/bin/env bash` (not `/bin/bash`): it finds bash via PATH, which works across Linux distros and macOS. `chmod +x` once, then run with `./`.
