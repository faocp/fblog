+++
title = "Set Up a New Project"
front = "Bootstrap a new Python project with uv. One tool handles the venv, dependencies, Python version, and lockfile."
category = "workflows"
difficulty = "intermediate"
weight = 240
+++

```sh
# 1. Create the project scaffold
uv init my-tool
cd my-tool

# 2. Pin a Python version
uv python pin 3.12

# 3. Add runtime + dev deps
uv add requests pydantic
uv add --dev pytest ruff

# 4. Initialize git
git init
# uv has already created a .gitignore covering .venv/ etc.
git add . && git commit -m "Initial commit"
```

`uv init` scaffolds a working project in seconds: pyproject.toml, .gitignore, .python-version, README. `uv add` updates pyproject.toml and the lockfile in one step. The lockfile (`uv.lock`) should be committed.
