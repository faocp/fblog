+++
title = "Set Up SSH Keys for GitHub"
front = "Configure password-less authentication for git operations against GitHub. One-time setup that saves friction forever."
category = "workflows"
difficulty = "intermediate"
weight = 180
+++

```sh
# 1. Generate the key
ssh-keygen -t ed25519 -C "you@example.com"

# 2. Copy the public key to clipboard
pbcopy < ~/.ssh/id_ed25519.pub        # macOS
cat ~/.ssh/id_ed25519.pub             # Linux: copy manually

# 3. Add it on GitHub:
#    Settings → SSH and GPG keys → New SSH key

# 4. Test it
ssh -T git@github.com
# → Hi felipe! You've successfully authenticated.

# 5. Clone via SSH (not HTTPS)
git clone git@github.com:user/repo.git
```

SSH avoids the periodic password/token prompts you get with HTTPS. For multiple GitHub accounts (work + personal), use `~/.ssh/config` to map hosts to specific keys.
