+++
title = "Imports"
front = "Bring code from other files or installed packages into your script."
category = "modules-env"
difficulty = "beginner"
weight = 120
+++

```python
import os                            # whole module
from pathlib import Path             # specific name
from datetime import datetime as dt  # alias

# your own modules
from utils.auth import validate
```

Group imports: stdlib first, then third-party, then your own — separated by blank lines. Tools like ruff enforce this automatically.
