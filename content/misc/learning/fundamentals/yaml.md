+++
title = "YAML"
front = "Human-friendly config format used heavily in DevOps tools (Docker Compose, Kubernetes, GitHub Actions)."
category = "data"
difficulty = "beginner"
weight = 140
+++

```yaml
name: my-app
version: 1.0
active: true

tags:
  - admin
  - ops

config:
  host: localhost
  port: 8080
```

Indentation defines structure — use spaces, never tabs. Whitespace bugs are the #1 cause of YAML errors. Validate with `yq` or a linter before committing.
