+++
title = "Python Versions"
front = "uv installs and switches between Python versions per project."
category = "modules-env"
difficulty = "beginner"
weight = 150
+++

```sh
uv python install 3.12
uv python install 3.11
uv python list             # available + installed

# pin the project to a version
uv python pin 3.12         # writes .python-version

# one-off run with a different version
uv run --python 3.11 script.py
```

No more `pyenv`, `brew install python@3.x`, or fighting system Python. uv installs versions side-by-side and picks the right one based on `.python-version`.
