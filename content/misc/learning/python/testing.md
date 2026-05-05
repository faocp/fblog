+++
title = "Test with pytest"
front = "The standard Python testing framework. Tests are functions starting with `test_` in files named `test_*.py`."
category = "workflows"
difficulty = "intermediate"
weight = 280
+++

```python
# test_auth.py
from auth import validate_email

def test_valid_email():
    assert validate_email("a@b.com")

def test_rejects_missing_at():
    assert not validate_email("invalid")

# parametrize for many cases
import pytest

@pytest.mark.parametrize("email", ["a@b.com", "x@y.io"])
def test_various_valid(email):
    assert validate_email(email)

# run
uv run pytest -v
uv run pytest tests/test_auth.py::test_valid_email
```

Test what's likely to break, not implementation details. Run with `-v` for verbose output, `-k name` to filter by test name, `-x` to stop at first failure.
