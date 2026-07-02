+++
title = "cp, mv, and rm"
front = "`cp` copies, `mv` moves or renames, and `rm` removes files."
category = "files"
difficulty = "beginner"
weight = 100
+++

Examples:

```sh
cp draft.md backup.md
mv draft.md post.md
rm old.txt
```

Be careful with `rm`: it does not send files to the trash; they are gone immediately. Double-check paths before using recursive removal like `rm -r`.
