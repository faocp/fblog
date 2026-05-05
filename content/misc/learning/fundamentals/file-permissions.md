+++
title = "File Permissions"
front = "Every file has read/write/execute bits for owner, group, and others — totaling 9 permission bits."
category = "files"
difficulty = "beginner"
weight = 60
+++

```sh
ls -l script.sh
# -rwxr-xr-x  1 felipe  staff  512 Jan 15  script.sh
#  ─── ─── ───
# owner grp other

chmod +x script.sh           # make executable
chmod 644 file.txt           # rw-r--r--
chmod 755 script.sh          # rwxr-xr-x
chmod 600 ~/.ssh/id_ed25519  # owner-only (required)
```

644 for normal files, 755 for executables and dirs, 600 for secrets. SSH keys especially must be 600 — SSH refuses to use them otherwise.
