+++
title = "Text Encoding"
front = "How characters are stored as bytes. UTF-8 is the standard everywhere modern."
category = "data"
difficulty = "beginner"
weight = 170
+++

```sh
# check encoding
file -I data.txt
# → data.txt: text/plain; charset=utf-8

# convert if needed
iconv -f ISO-8859-1 -t UTF-8 old.txt > new.txt
```

```python
# in Python (default is UTF-8)
with open("file.txt", encoding="utf-8") as f:
    content = f.read()
```

Default to UTF-8 everywhere. You'll mostly hit encoding issues with old files or Windows-exported data — `iconv` converts between encodings.
