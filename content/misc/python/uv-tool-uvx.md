+++
title = "uv tool (uvx)"
front = "Install Python CLIs globally without polluting any project's environment."
category = "modules-env"
difficulty = "beginner"
weight = 170
+++

```sh
uv tool install ruff
uv tool install httpie
uv tool list

# run without installing
uv tool run black file.py
uvx black file.py            # short form
```

For tools you want available everywhere (linters, formatters, CLIs). Each gets its own isolated env. `uvx` is shorthand for `uv tool run`, handy for one-offs.
