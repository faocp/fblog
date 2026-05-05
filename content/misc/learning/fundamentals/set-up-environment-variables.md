+++
title = "Set Up Environment Variables"
front = "Move secrets and per-machine config out of code and into env vars or a `.env` file. The standard pattern across every language."
category = "workflows"
difficulty = "intermediate"
weight = 200
+++

```sh
# 1. Permanent — add to ~/.zshrc or ~/.bashrc
export OPENAI_API_KEY="sk-..."
export DATABASE_URL="postgres://localhost/myapp"
# then: source ~/.zshrc

# 2. Per-project — .env file (don't commit!)
# .env
OPENAI_API_KEY=sk-...
DATABASE_URL=postgres://localhost/myapp

# load it (bash)
set -a; source .env; set +a
```

```python
# in Python (with python-dotenv)
from dotenv import load_dotenv
load_dotenv()
api_key = os.environ["OPENAI_API_KEY"]
```

```sh
# always: add to .gitignore
echo ".env" >> .gitignore
```

User-wide secrets go in your shell rc file. Project-specific config goes in `.env` — never commit it. Commit a `.env.example` with the keys (no values) so teammates know what to set.
