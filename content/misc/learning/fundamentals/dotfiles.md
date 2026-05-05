+++
title = "Dotfiles"
front = "Hidden config files in your home directory that customize your shell, editors, and tools."
category = "shell"
difficulty = "beginner"
weight = 40
+++

```sh
~/.zshrc           # zsh config (runs each shell)
~/.bashrc          # bash config
~/.profile         # POSIX, runs at login
~/.gitconfig       # git settings
~/.ssh/config      # ssh client config

# apply changes without restarting
source ~/.zshrc
```

Put `export VAR=...`, aliases, and functions in `~/.zshrc` (or `~/.bashrc`). After editing, run `source` to reload — or just open a new terminal.
