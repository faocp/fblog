+++
title = "&&, ||, and ;"
front = "Control operators let you chain commands based on success, failure, or simple sequence."
category = "scripting"
difficulty = "intermediate"
weight = 220
+++

Examples:

```sh
npm test && npm run build
npm test || echo "tests failed"
cd site; hugo
```

`&&` runs the next command only on success, `||` only on failure, and `;` runs the next command regardless.
