+++
title = "HTTP Methods & Status Codes"
front = "HTTP verbs declare intent; status codes signal the result."
category = "network"
difficulty = "beginner"
weight = 100
+++

```text
# methods
GET     /users         # read
POST    /users         # create
PUT     /users/42      # replace
PATCH   /users/42      # partial update
DELETE  /users/42      # remove

# status code categories
2xx  success      (200 OK, 201 Created, 204 No Content)
3xx  redirect    (301 Moved, 304 Not Modified)
4xx  client err  (400 Bad Request, 401, 403, 404)
5xx  server err  (500, 502 Bad Gateway, 503)
```

When debugging APIs, the status code's first digit tells you whose problem it is: 4xx means *your* request was bad, 5xx means the server failed.
