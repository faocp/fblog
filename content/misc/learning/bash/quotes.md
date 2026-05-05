+++
title = "Quoting"
front = "Single quotes preserve everything literally; double quotes allow variable expansion."
category = "basics"
difficulty = "beginner"
weight = 20
+++

```sh
name="Felipe"
echo '$name'        # → $name
echo "$name"        # → Felipe
echo "Hi, $name!"   # → Hi, Felipe!

# command substitution needs double quotes
today="$(date +%Y-%m-%d)"
echo "Today is $today"
```

Default to double quotes around variables. Use single quotes when you literally want `$` in the output (regex patterns, awk scripts).
