+++
title = "Permissions"
front = "Unix permissions control who can read, write, or execute a file."
category = "files"
difficulty = "intermediate"
weight = 160
+++

`r` means read, `w` means write, and `x` means execute. Permissions apply to user, group, and others.

Real-world example: a script may fail with "permission denied" until you make it executable:

```sh
chmod +x deploy.sh
```
