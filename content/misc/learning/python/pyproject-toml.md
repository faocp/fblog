+++
title = "pyproject.toml"
front = "The project config file — declares dependencies, Python version, scripts, and tool settings."
category = "modules-env"
difficulty = "beginner"
weight = 160
+++

```toml
[project]
name = "my-tool"
version = "0.1.0"
requires-python = ">=3.12"
dependencies = [
    "requests>=2.31",
    "pydantic>=2.0",
]

[tool.uv]
dev-dependencies = [
    "pytest>=8.0",
    "ruff>=0.1",
]
```

One file replaces `requirements.txt`, `setup.py`, and various tool configs. Tools like ruff and pytest can also be configured here under `[tool.*]` sections.
