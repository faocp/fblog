+++
title = "Virtual environments"
front = "A virtual environment isolates a project's Python packages from the rest of your machine."
category = "tooling"
difficulty = "beginner"
weight = 190
+++

Example:

```sh
python -m venv .venv
source .venv/bin/activate
```

Real-world example: one project can use Django 5 while another older project still uses Django 3, without package conflicts.
