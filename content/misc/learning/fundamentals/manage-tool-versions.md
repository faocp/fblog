+++
title = "Manage Tool Versions"
front = "Different projects often need different versions of Python, Node, etc. Version managers handle this without polluting your system."
category = "workflows"
difficulty = "intermediate"
weight = 200
+++

```sh
# Python — uv handles versions natively
uv python install 3.12
uv python install 3.11
uv python list                # what's available
uv python pin 3.12            # writes .python-version

# Node.js — fnm or nvm
fnm install 20
fnm use 20
fnm default 20

# check what's active
python --version
node --version
```

Avoid installing language runtimes directly through `brew` or `apt` for development — version conflicts will bite you. Use uv (Python), fnm/nvm (Node), or asdf (multi-language) and let project files declare which version to use.
