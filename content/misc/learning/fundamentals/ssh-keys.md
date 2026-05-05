+++
title = "SSH Keys"
front = "A key pair lets you authenticate to remote servers (and GitHub) without passwords."
category = "network"
difficulty = "beginner"
weight = 120
+++

```sh
# generate a modern key
ssh-keygen -t ed25519 -C "you@example.com"
# → ~/.ssh/id_ed25519       (private — keep secret)
# → ~/.ssh/id_ed25519.pub   (public — share freely)

# show the public key (paste into GitHub)
cat ~/.ssh/id_ed25519.pub

# use a specific key
ssh -i ~/.ssh/id_ed25519 user@host

# test GitHub connection
ssh -T git@github.com
```

Share the `.pub` (public) key, never the private one. The private key file must be `chmod 600` or SSH refuses to use it.
