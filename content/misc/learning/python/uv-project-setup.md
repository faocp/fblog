+++
title = "uv Project Setup"
front = "uv handles your project's virtual environment, dependencies, lockfile, and Python version automatically."
category = "modules-env"
difficulty = "beginner"
weight = 130
+++

```sh
uv init my-project          # new project scaffold
cd my-project

uv add requests              # adds to pyproject.toml + installs
uv add --dev pytest ruff     # dev-only deps
uv remove requests
uv sync                      # install everything from pyproject.toml
```

`uv init` creates `.venv/` (auto-gitignored), `pyproject.toml`, and `uv.lock`. No need to activate the venv manually; `uv run` handles it.
