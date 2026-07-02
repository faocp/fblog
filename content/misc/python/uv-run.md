+++
title = "uv run"
front = "Run a Python command inside the project's environment without activating it."
category = "modules-env"
difficulty = "beginner"
weight = 140
+++

```sh
uv run python script.py
uv run pytest
uv run python -m mypackage.cli

# one-off scripts with inline deps
uv run --with requests script.py
```

Replaces the old `source .venv/bin/activate && python ...` ritual. `uv run` auto-syncs deps if pyproject.toml has changed since the last run.
