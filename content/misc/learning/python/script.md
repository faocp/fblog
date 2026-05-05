+++
title = "Run Scripts & Modules"
front = "Two main ways to run Python code with uv, plus the `__main__` guard for files meant to be both run and imported."
category = "workflows"
difficulty = "intermediate"
weight = 250
+++

```text
# 1. Run a script or module
uv run python script.py
uv run python -m mypackage.cli      # for packages

# 2. Run an entry point defined in pyproject.toml
uv run mytool                       # if [project.scripts] defines it

# 3. The "main" guard — only runs when executed directly
def main():
    ...

if __name__ == "__main__":
    main()
```

Use `python -m` form when running anything inside a package — direct execution breaks relative imports. The `__main__` guard prevents code from running when the file is imported elsewhere.
