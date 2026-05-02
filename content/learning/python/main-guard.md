+++
title = "__name__ guard"
front = 'The `if __name__ == "__main__"` guard runs code only when a file is executed directly.'
category = "organization"
difficulty = "intermediate"
weight = 180
+++

Example:

```py
def main():
    print("running")

if __name__ == "__main__":
    main()
```

Real-world example: this lets a file be both importable as a module and runnable as a script without accidentally executing script behavior during import.
