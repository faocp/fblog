+++
title = "Shell vs Terminal"
front = "The terminal is the window/app; the shell is the program inside it that interprets your commands (bash, zsh, fish)."
category = "shell"
difficulty = "beginner"
weight = 10
+++

```sh
echo $SHELL          # which shell you're running
echo $0              # current shell name
chsh -s /bin/zsh     # change default shell
```

macOS defaults to zsh; most Linux distros default to bash. Most bash scripts work in zsh, but advanced features differ — always declare scripts with `#!/usr/bin/env bash` so the right interpreter runs.
