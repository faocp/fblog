+++
title = "Args & User Input"
front = "Standard pattern for parsing positional args and flags in a script."
category = "workflows"
difficulty = "intermediate"
weight = 240
+++

```sh
#!/usr/bin/env bash
set -euo pipefail

usage() { echo "Usage: $0 [-v] <input>"; exit 1; }

verbose=false
while getopts "v" opt; do
    case "$opt" in
        v) verbose=true ;;
        *) usage ;;
    esac
done
shift $((OPTIND - 1))

[[ $# -lt 1 ]] && usage
input="$1"

$verbose && echo "Processing $input"
```

`getopts` handles short flags well. For complex CLIs (long flags, subcommands) consider rewriting in Python with argparse; bash gets unwieldy fast past a few options.
