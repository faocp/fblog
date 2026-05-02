+++
title = "Script arguments"
front = "Bash scripts receive command-line arguments through variables like `$1`, `$2`, and `$@`."
category = "scripting"
difficulty = "intermediate"
weight = 240
+++

`$1` is the first argument, `$2` is the second, and `"$@"` represents all arguments safely.

Real-world example: a script called `resize.sh image.png 800` can read the input file from `$1` and the width from `$2`.
