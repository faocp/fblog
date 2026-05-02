+++
title = "Pipes"
front = "A pipe sends the output of one command into the input of another command."
category = "io"
difficulty = "beginner"
weight = 130
+++

Example:

```sh
cat access.log | grep "404" | wc -l
```

Real-world example: combine small tools to answer questions quickly, like counting how many error lines appear in a log file.
