+++
title = "if / else"
front = "Conditional execution. Test expressions go in `[[ ... ]]`."
category = "control-flow"
difficulty = "beginner"
weight = 70
+++

```sh
if [[ -f "$file" ]]; then
    echo "exists"
elif [[ -d "$file" ]]; then
    echo "is a directory"
else
    echo "not found"
fi

# string compare
if [[ "$env" == "prod" ]]; then ...; fi

# number compare
if (( count > 10 )); then ...; fi
```

Use `[[ ]]` for strings/files (modern bash) and `(( ))` for arithmetic. Avoid the older single-bracket `[ ]`; it has subtle quoting issues.
