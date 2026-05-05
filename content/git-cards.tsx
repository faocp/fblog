import { useState } from 'react';

const topics = {
  Fundamentals: {
    title: 'Dev Fundamentals',
    description: 'Cross-cutting concepts every developer relies on — shells, files, networking, and data formats.',
    categories: ['All', 'Shell', 'Files', 'Network', 'Data', 'Workflows'],
    concepts: [
      // Shell
      {
        category: 'Shell',
        title: 'Shell vs Terminal',
        desc: 'The terminal is the window/app; the shell is the program inside it that interprets your commands (bash, zsh, fish).',
        code: 'echo $SHELL          # which shell you\'re running\necho $0              # current shell name\nchsh -s /bin/zsh     # change default shell',
        usage: 'macOS defaults to zsh; most Linux distros default to bash. Most bash scripts work in zsh, but advanced features differ — always declare with `#!/usr/bin/env bash` in scripts.',
      },
      {
        category: 'Shell',
        title: 'Environment Variables',
        desc: 'Key-value pairs that exist in your shell\'s environment and are inherited by programs you run from it.',
        code: '# set for current shell\nexport API_KEY="sk-..."\nexport DATABASE_URL="postgres://..."\n\n# use in commands\necho "$API_KEY"\ncurl -H "Authorization: Bearer $API_KEY" ...\n\n# see all env vars\nenv\nprintenv API_KEY\n\n# inline (set just for one command)\nDEBUG=1 ./script.sh',
        usage: 'Programs read env vars at startup — the standard pattern for config that varies between machines (API keys, database URLs, debug flags). `export` makes the variable available to child processes; without it, only the current shell sees it.',
      },
      {
        category: 'Shell',
        title: 'PATH',
        desc: 'A colon-separated list of directories the shell searches when you type a command name.',
        code: 'echo "$PATH"\n# /usr/local/bin:/usr/bin:/bin:/Users/felipe/.local/bin\n\nwhich python          # find which one you\'re running\nwhich -a python       # all matches in PATH\n\n# add a directory (prepend)\nexport PATH="$HOME/bin:$PATH"',
        usage: 'Order matters — the shell uses the first match. Prepend to override system tools. When "command not found" hits a binary you know exists, PATH is usually why.',
      },
      {
        category: 'Shell',
        title: 'Dotfiles',
        desc: 'Hidden config files in your home directory that customize your shell, editors, and tools.',
        code: '~/.zshrc           # zsh config (runs each shell)\n~/.bashrc          # bash config\n~/.profile         # POSIX, runs at login\n~/.gitconfig       # git settings\n~/.ssh/config      # ssh client config\n\n# apply changes without restarting\nsource ~/.zshrc',
        usage: 'Put `export VAR=...`, aliases, and functions in `~/.zshrc` (or `~/.bashrc`). After editing, run `source` to reload — or just open a new terminal.',
      },
      {
        category: 'Shell',
        title: 'Home & Working Directory',
        desc: '`~` expands to your home dir; `.` is current; `..` is parent. The shell tracks a current working directory (cwd).',
        code: 'pwd                    # /Users/felipe/projects/api\ncd ~                   # home\ncd ~/Documents         # absolute via home\ncd ../sibling-dir      # relative\ncd -                   # previous dir',
        usage: 'Scripts often misbehave when run from a different working directory. To anchor a script to its own location, put `cd "$(dirname "$0")"` at the top.',
      },

      // Files
      {
        category: 'Files',
        title: 'File Permissions',
        desc: 'Every file has read/write/execute bits for owner, group, and others — totaling 9 permission bits.',
        code: 'ls -l script.sh\n# -rwxr-xr-x  1 felipe  staff  512 Jan 15  script.sh\n#  ─── ─── ───\n# owner grp other\n\nchmod +x script.sh           # make executable\nchmod 644 file.txt           # rw-r--r--\nchmod 755 script.sh          # rwxr-xr-x\nchmod 600 ~/.ssh/id_ed25519  # owner-only (required)',
        usage: '644 for normal files, 755 for executables and dirs, 600 for secrets. SSH keys especially must be 600 — SSH refuses to use them otherwise.',
      },
      {
        category: 'Files',
        title: 'Hidden Files',
        desc: 'Files starting with `.` are hidden from `ls` by default — used for config and metadata.',
        code: 'ls            # excludes hidden\nls -a         # all (incl. hidden)\nls -la        # long format + hidden\n\n# common ones\n.env          # local env vars\n.gitignore    # git ignore patterns\n.vscode/      # editor config\n.DS_Store     # macOS metadata (annoying)',
        usage: 'Most secret files (`.env`, SSH keys) are dotfiles by convention. Add system noise like `.DS_Store` to a global gitignore so it never sneaks into commits.',
      },
      {
        category: 'Files',
        title: 'Absolute vs Relative Paths',
        desc: 'Absolute paths start from `/`; relative paths start from your current working directory.',
        code: '/etc/hosts             # absolute — same anywhere\n./config.json          # relative — depends on cwd\n../shared/lib          # parent + descend\n~/.config              # home-relative\n\n# in a script: anchor to script\'s directory\ncd "$(dirname "$0")"',
        usage: 'Relative paths break when scripts are invoked from elsewhere. Cron, systemd, and CI all run from unexpected directories — always use absolute paths or anchor the script\'s location.',
      },

      // Network
      {
        category: 'Network',
        title: 'localhost & Ports',
        desc: 'localhost (127.0.0.1) is your own machine; ports identify which program receives the connection.',
        code: '# standard local URLs\nhttp://localhost:3000        # web dev server\nhttp://127.0.0.1:8080        # equivalent\n\n# what\'s listening?\nlsof -i :3000                # who has port 3000?\nlsof -i -P -n | grep LISTEN  # all listening\n\n# kill the process holding a port\nlsof -ti :3000 | xargs kill',
        usage: 'Common dev ports: 3000 (Node/React), 5173 (Vite), 8000/8080 (general), 5432 (Postgres), 6379 (Redis). When you see "address already in use", another process owns that port.',
      },
      {
        category: 'Network',
        title: 'HTTP Methods & Status Codes',
        desc: 'HTTP verbs declare intent; status codes signal the result.',
        code: '# methods\nGET     /users         # read\nPOST    /users         # create\nPUT     /users/42      # replace\nPATCH   /users/42      # partial update\nDELETE  /users/42      # remove\n\n# status code categories\n2xx  success      (200 OK, 201 Created, 204 No Content)\n3xx  redirect    (301 Moved, 304 Not Modified)\n4xx  client err  (400 Bad Request, 401, 403, 404)\n5xx  server err  (500, 502 Bad Gateway, 503)',
        usage: 'When debugging APIs, the status code\'s first digit tells you whose problem it is — 4xx means *your* request was bad, 5xx means the server failed.',
      },
      {
        category: 'Network',
        title: 'curl Basics',
        desc: 'The standard tool for making HTTP requests from the command line.',
        code: 'curl https://api.example.com/users     # GET\ncurl -i https://...                    # include headers\ncurl -s https://...                    # silent (no progress)\n\ncurl -X POST https://api.example.com/users \\\n  -H "Content-Type: application/json" \\\n  -H "Authorization: Bearer $API_KEY" \\\n  -d \'{"name": "Felipe"}\'\n\n# download to file\ncurl -o output.json https://...',
        usage: '`-s` for clean output you can pipe to `jq`. `-i` to debug headers. For repeated/complex requests, save to a script or use `httpie` for friendlier syntax.',
      },
      {
        category: 'Network',
        title: 'SSH Keys',
        desc: 'A key pair lets you authenticate to remote servers (and GitHub) without passwords.',
        code: '# generate a modern key\nssh-keygen -t ed25519 -C "you@example.com"\n# → ~/.ssh/id_ed25519       (private — keep secret)\n# → ~/.ssh/id_ed25519.pub   (public — share freely)\n\n# show the public key (paste into GitHub)\ncat ~/.ssh/id_ed25519.pub\n\n# use a specific key\nssh -i ~/.ssh/id_ed25519 user@host\n\n# test GitHub connection\nssh -T git@github.com',
        usage: 'Share the `.pub` (public) key, never the private one. The private key file must be `chmod 600` or SSH refuses to use it.',
      },

      // Data
      {
        category: 'Data',
        title: 'JSON',
        desc: 'The standard data format for APIs and config — strings, numbers, booleans, null, arrays, objects.',
        code: '{\n  "name": "Felipe",\n  "age": 30,\n  "active": true,\n  "tags": ["admin", "ops"],\n  "address": null\n}\n\n# validate / pretty-print\ncat data.json | jq .\n\n# in Python\nimport json\ndata = json.loads(raw_string)',
        usage: 'Strict syntax — keys are always quoted strings, no trailing commas, no comments. When an API returns malformed JSON, `jq` is the fastest way to spot it.',
      },
      {
        category: 'Data',
        title: 'YAML',
        desc: 'Human-friendly config format used heavily in DevOps tools (Docker Compose, Kubernetes, GitHub Actions).',
        code: 'name: my-app\nversion: 1.0\nactive: true\n\ntags:\n  - admin\n  - ops\n\nconfig:\n  host: localhost\n  port: 8080',
        usage: 'Indentation defines structure — use spaces, never tabs. Whitespace bugs are the #1 cause of YAML errors. Validate with `yq` or a linter before committing.',
      },
      {
        category: 'Data',
        title: 'Text Encoding',
        desc: 'How characters are stored as bytes. UTF-8 is the standard everywhere modern.',
        code: '# check encoding\nfile -I data.txt\n# → data.txt: text/plain; charset=utf-8\n\n# convert if needed\niconv -f ISO-8859-1 -t UTF-8 old.txt > new.txt\n\n# in Python (default is UTF-8)\nwith open("file.txt", encoding="utf-8") as f:\n    content = f.read()',
        usage: 'Default to UTF-8 everywhere. You\'ll mostly hit encoding issues with old files or Windows-exported data — `iconv` converts between encodings.',
      },
      {
        category: 'Data',
        title: 'Line Endings',
        desc: 'Text files end lines differently across systems: Unix uses LF (`\\n`), Windows uses CRLF (`\\r\\n`).',
        code: '# check\nfile script.sh\n# → ASCII text                     (good — LF)\n# → ASCII text, with CRLF endings  (Windows)\n\n# convert\ndos2unix script.sh\n\n# git auto-handle\ngit config --global core.autocrlf input    # macOS/Linux',
        usage: 'CRLF in shell scripts breaks them silently (`bash: cannot execute: required file not found`). Set git\'s `core.autocrlf` so checkouts use the right convention for your OS.',
      },

      // Workflows
      {
        category: 'Workflows',
        title: 'Set Up Environment Variables',
        desc: 'Move secrets and per-machine config out of code and into env vars or a `.env` file. The standard pattern across every language.',
        code: '# 1. Permanent — add to ~/.zshrc or ~/.bashrc\nexport OPENAI_API_KEY="sk-..."\nexport DATABASE_URL="postgres://localhost/myapp"\n# then: source ~/.zshrc\n\n# 2. Per-project — .env file (don\'t commit!)\n# .env\nOPENAI_API_KEY=sk-...\nDATABASE_URL=postgres://localhost/myapp\n\n# load it (bash)\nset -a; source .env; set +a\n\n# in Python (with python-dotenv)\nfrom dotenv import load_dotenv\nload_dotenv()\napi_key = os.environ["OPENAI_API_KEY"]\n\n# always: add to .gitignore\necho ".env" >> .gitignore',
        usage: 'User-wide secrets go in your shell rc file. Project-specific config goes in `.env` — never commit it. Commit a `.env.example` with the keys (no values) so teammates know what to set.',
      },
      {
        category: 'Workflows',
        title: 'Set Up SSH Keys for GitHub',
        desc: 'Configure password-less authentication for git operations against GitHub. One-time setup that saves friction forever.',
        code: '# 1. Generate the key\nssh-keygen -t ed25519 -C "you@example.com"\n\n# 2. Copy the public key to clipboard\npbcopy < ~/.ssh/id_ed25519.pub        # macOS\ncat ~/.ssh/id_ed25519.pub             # Linux — copy manually\n\n# 3. Add it on GitHub:\n#    Settings → SSH and GPG keys → New SSH key\n\n# 4. Test it\nssh -T git@github.com\n# → Hi felipe! You\'ve successfully authenticated.\n\n# 5. Clone via SSH (not HTTPS)\ngit clone git@github.com:user/repo.git',
        usage: 'SSH avoids the periodic password/token prompts you get with HTTPS. For multiple GitHub accounts (work + personal), use `~/.ssh/config` to map hosts to specific keys.',
      },
      {
        category: 'Workflows',
        title: 'Find What\'s Running on a Port',
        desc: 'A common debugging task — figuring out which process owns a port and freeing it.',
        code: '# who\'s on port 3000?\nlsof -i :3000\n# COMMAND   PID    USER   ...\n# node     12345  felipe ...\n\n# alternatives\nnetstat -anv | grep 3000     # macOS\nss -tulpn | grep 3000        # Linux\n\n# kill it (gentle, sends SIGTERM)\nkill 12345\n\n# kill it (force, sends SIGKILL)\nkill -9 12345\n\n# one-liner: kill whatever\'s on a port\nlsof -ti :3000 | xargs kill',
        usage: 'After a crashed dev server you\'ll often see "address already in use" — this is the fix. Try `kill` (SIGTERM) first; only escalate to `kill -9` (SIGKILL) if the process won\'t stop.',
      },
      {
        category: 'Workflows',
        title: 'Manage Tool Versions',
        desc: 'Different projects often need different versions of Python, Node, etc. Version managers handle this without polluting your system.',
        code: '# Python — uv handles versions natively\nuv python install 3.12\nuv python install 3.11\nuv python list                # what\'s available\nuv python pin 3.12            # writes .python-version\n\n# Node.js — fnm or nvm\nfnm install 20\nfnm use 20\nfnm default 20\n\n# check what\'s active\npython --version\nnode --version',
        usage: 'Avoid installing language runtimes directly through `brew` or `apt` for development — version conflicts will bite you. Use uv (Python), fnm/nvm (Node), or asdf (multi-language) and let project files declare which version to use.',
      },
    ],
  },

  Git: {
    title: 'Git Essentials',
    description: 'Core concepts, commands, and end-to-end workflows for an everyday GitHub-based dev loop.',
    categories: ['All', 'Basics', 'Branching', 'Remote', 'Utilities', 'Workflows'],
    concepts: [
      // Basics
      {
        category: 'Basics',
        title: 'Repository',
        desc: 'A project tracked by git, including all of its history.',
        code: 'git init                # new project here\ngit clone <url>         # copy a remote repo from GitHub',
        usage: 'Run `init` for a fresh project, `clone` to start working on something that already lives on GitHub.',
      },
      {
        category: 'Basics',
        title: 'The Three States',
        desc: 'Every file is either modified (working dir), staged, or committed.',
        code: 'edit  →  git add  →  git commit',
        usage: 'This is the mental model for everything else. Staging lets you commit a curated subset of your changes.',
      },
      {
        category: 'Basics',
        title: 'Commit',
        desc: 'A snapshot of your staged changes with a message.',
        code: 'git add src/auth.js\ngit commit -m "Validate email on signup"',
        usage: 'Keep commits small and focused on one logical change. Good messages explain *why*, not *what*.',
      },
      {
        category: 'Basics',
        title: 'git status',
        desc: 'Shows what has changed, what is staged, and which branch you are on.',
        code: 'git status',
        usage: 'Your most-used command. Run it constantly to stay oriented.',
      },
      {
        category: 'Basics',
        title: 'git log',
        desc: 'Browse commit history.',
        code: 'git log --oneline --graph --decorate',
        usage: 'Find when a bug was introduced or understand how a file evolved. The flags above give a compact, readable view.',
      },
      {
        category: 'Basics',
        title: 'git diff',
        desc: 'See line-by-line changes.',
        code: 'git diff                # unstaged changes\ngit diff --staged       # what would commit\ngit diff main..feature  # between branches',
        usage: 'Always review the diff before committing — it catches stray console.logs and accidental edits.',
      },

      // Branching
      {
        category: 'Branching',
        title: 'Branch',
        desc: 'A movable pointer to a series of commits — used to isolate work.',
        code: 'git switch -c feature-auth   # create + switch\ngit switch main              # back to main\ngit branch -d feature-auth   # delete',
        usage: 'One branch per feature or fix. Keep `main` always deployable — it should reflect what is in production.',
      },
      {
        category: 'Branching',
        title: 'Merge',
        desc: 'Pulls another branch\'s changes into your current one.',
        code: 'git switch main\ngit merge feature-auth',
        usage: 'On GitHub, merging usually happens through the PR "Merge" button rather than locally — that way CI and review approval are enforced.',
      },
      {
        category: 'Branching',
        title: 'Merge Conflict',
        desc: 'Happens when two branches change the same lines and git can\'t auto-resolve.',
        code: '# open files with <<<<<<< markers\n# edit to keep what you want\ngit add <file>\ngit commit',
        usage: 'Most editors highlight conflicts and offer "accept current/incoming/both" buttons. Test before committing the resolution.',
      },
      {
        category: 'Branching',
        title: 'Rebase',
        desc: 'Replays your commits on top of another branch for a linear history.',
        code: 'git switch feature-x\ngit rebase main',
        usage: 'Used to keep your feature branch up-to-date with main. Don\'t rebase branches others are working on — it rewrites history.',
      },

      // Remote
      {
        category: 'Remote',
        title: 'Remote',
        desc: 'A version of your repo hosted elsewhere — usually GitHub.',
        code: 'git remote -v                       # list remotes\ngit remote add origin <url>',
        usage: '`origin` is the conventional name for your primary remote. Most projects only need one; forks add a second called `upstream`.',
      },
      {
        category: 'Remote',
        title: 'Push',
        desc: 'Sends your local commits to a remote.',
        code: 'git push                       # if upstream is set\ngit push -u origin feature-x   # first push of a new branch',
        usage: '`-u` sets the upstream so future `push`/`pull` work without arguments. After this, your branch shows up on GitHub.',
      },
      {
        category: 'Remote',
        title: 'Pull',
        desc: 'Fetches remote changes and merges them into your branch.',
        code: 'git pull\ngit pull --rebase     # avoids extra merge commits',
        usage: 'Run before starting work each day. `--rebase` keeps history cleaner on shared branches.',
      },
      {
        category: 'Remote',
        title: 'Fetch',
        desc: 'Downloads remote changes without touching your working branch.',
        code: 'git fetch origin\ngit log origin/main   # see what you\'d be merging',
        usage: 'Use when you want to inspect remote changes before deciding to merge or rebase.',
      },
      {
        category: 'Remote',
        title: 'Pull Request',
        desc: 'A GitHub feature for proposing a merge from one branch into another, with discussion, review, and CI checks.',
        code: '# After pushing your branch:\ngh pr create --fill          # uses last commit as title/body\ngh pr view --web             # open in browser\ngh pr list\ngh pr checkout 142           # review someone else\'s PR locally',
        usage: 'PRs are where code review and CI run. Most teams use squash-merge to keep `main`\'s history one commit per PR.',
      },

      // Utilities
      {
        category: 'Utilities',
        title: '.gitignore',
        desc: 'A file listing patterns git should ignore.',
        code: '# .gitignore\nnode_modules/\n.env\n*.log\n.DS_Store\ndist/',
        usage: 'Add on day one. Never commit secrets, dependencies, or build output. GitHub provides language-specific templates when you create a repo.',
      },
      {
        category: 'Utilities',
        title: 'git stash',
        desc: 'Temporarily shelves uncommitted changes so you can switch contexts.',
        code: 'git stash -u            # save WIP, including new files\ngit switch hotfix\n# ...do urgent work...\ngit switch feature-x\ngit stash pop           # restore WIP',
        usage: 'Perfect for the "I need to fix prod *right now*" moment. The `-u` flag matters — without it, untracked files won\'t be saved.',
      },
      {
        category: 'Utilities',
        title: 'Undo Changes',
        desc: 'Discard, unstage, or rewind — depending on how far back you went.',
        code: 'git restore file.js          # discard local edits\ngit restore --staged file.js # unstage\ngit reset --soft HEAD~1      # undo last commit, keep changes\ngit reset --hard HEAD~1      # ⚠️ delete last commit + changes',
        usage: '`--soft` is safe and useful for amending. `--hard` is destructive — only use locally, never on pushed commits.',
      },
      {
        category: 'Utilities',
        title: 'Tags',
        desc: 'Named pointers to specific commits, used for releases.',
        code: 'git tag v1.0.0\ngit tag -a v1.0.0 -m "First public release"\ngit push origin v1.0.0',
        usage: 'Mark release versions or deployment milestones. GitHub Actions and other CI systems often trigger off tag pushes.',
      },
      {
        category: 'Utilities',
        title: 'gh CLI',
        desc: 'GitHub\'s official command-line tool — pairs with git for GitHub-specific tasks.',
        code: 'gh auth login              # one-time setup\ngh repo clone owner/name\ngh pr create --fill\ngh pr checkout 42\ngh issue list --assignee @me\ngh run watch              # follow CI for current commit',
        usage: 'Saves the trip to the browser for most PR and CI tasks. Once authenticated, it also handles SSH/HTTPS credentials transparently.',
      },

      // Workflows
      {
        category: 'Workflows',
        title: 'Daily Push Flow',
        desc: 'The end-to-end loop for adding a feature or fix and getting it merged into main on GitHub. This is the workflow you\'ll run dozens of times a week.',
        code: '# 1. Start from a fresh main\ngit switch main\ngit pull\n\n# 2. Create a branch for your work\ngit switch -c feat/email-validation\n\n# 3. Make changes, then commit in logical chunks\ngit add src/auth.js\ngit diff --staged              # review before committing\ngit commit -m "Validate email format on signup"\n\n# 4. Push and open a PR\ngit push -u origin feat/email-validation\ngh pr create --fill',
        usage: 'Always branch from an up-to-date main. Push early — even on rough work — so teammates can see progress and CI runs sooner. The PR is where review and merging happen, not your local machine.',
      },
      {
        category: 'Workflows',
        title: 'Sync Branch with Main',
        desc: 'Bring the latest changes from main into your in-progress feature branch. Run this every day or two so your PR doesn\'t drift behind and accumulate conflicts.',
        code: '# 1. Update your local main\ngit switch main\ngit pull\n\n# 2. Replay your feature work on top of latest main\ngit switch feat/email-validation\ngit rebase main\n\n# 3. If there are conflicts, edit the files, then:\ngit add <resolved-files>\ngit rebase --continue\n\n# 4. Push the rewritten branch\ngit push --force-with-lease',
        usage: '`--force-with-lease` is the safe variant of `--force` — it refuses to overwrite commits you haven\'t seen. If you prefer to avoid history rewrites, `git merge main` into your branch works too, but creates an extra merge commit.',
      },
      {
        category: 'Workflows',
        title: 'Code Review Iteration',
        desc: 'Push follow-up changes in response to PR review comments. GitHub will automatically update the PR each time you push.',
        code: '# Option A: separate commits (easier to follow review thread)\ngit add src/auth.js\ngit commit -m "Address review: trim whitespace"\ngit push\n\n# Option B: amend previous commit (cleaner final history)\ngit add src/auth.js\ngit commit --amend --no-edit\ngit push --force-with-lease',
        usage: 'Option A is friendlier for reviewers — they can see exactly what changed since their last review. Option B is fine if your team squash-merges anyway, since intermediate commits get collapsed at merge time.',
      },
      {
        category: 'Workflows',
        title: 'Hotfix While Mid-Feature',
        desc: 'Drop your in-progress work to ship an urgent fix, then come back to where you left off. Stash is the key tool here.',
        code: '# 1. Stash WIP, including any new untracked files\ngit stash -u\n\n# 2. Branch off latest main\ngit switch main\ngit pull\ngit switch -c hotfix/payment-timeout\n\n# 3. Fix, commit, push, open PR\ngit commit -am "Increase payment gateway timeout"\ngit push -u origin hotfix/payment-timeout\ngh pr create --fill\n\n# 4. Once merged, resume your feature work\ngit switch feat/email-validation\ngit stash pop',
        usage: 'Hotfixes branch from `main`, not from your feature branch — you don\'t want to ship half-done feature code with the fix. The `-u` on stash is critical: without it, brand-new files vanish when you switch branches.',
      },
      {
        category: 'Workflows',
        title: 'Fork & Stay in Sync',
        desc: 'The standard workflow for contributing to a repo you don\'t have write access to — typical for open source.',
        code: '# 1. Click "Fork" on GitHub, then clone your fork\ngit clone git@github.com:you/their-project.git\ncd their-project\n\n# 2. Add the original repo as \'upstream\'\ngit remote add upstream git@github.com:them/their-project.git\ngit remote -v\n\n# 3. Periodically pull updates from upstream\ngit fetch upstream\ngit switch main\ngit merge upstream/main\ngit push                    # update your fork\n\n# 4. Make changes on a branch, push to your fork, open PR upstream\ngit switch -c fix/typo-in-readme\n# ...edit, commit, push...\ngh pr create --fill',
        usage: 'Two remotes: `origin` is your fork, `upstream` is the original repo. PRs go from a branch on your fork to upstream\'s main. Keep your fork\'s main in sync with upstream so new branches start from the latest code.',
      },
      {
        category: 'Workflows',
        title: 'Undo a Pushed Commit',
        desc: 'Reverse a bad commit that\'s already on GitHub without rewriting shared history. The safe approach is to add a new commit that cancels out the old one.',
        code: '# 1. Find the bad commit\ngit log --oneline\n\n# 2. Create a new commit that undoes it\ngit revert <commit-hash>\n\n# 3. Push the revert\ngit push',
        usage: '`revert` is safe on shared branches — it adds a new commit instead of erasing the old one. Avoid `git reset --hard` + `--force` on any branch others may have pulled; you\'ll cause confusion and lost work.',
      },
    ],
  },

  Python: {
    title: 'Python Essentials',
    description: 'Core syntax, data structures, and a uv-based modern dev workflow.',
    categories: ['All', 'Basics', 'Data Structures', 'Modules & Env', 'Utilities', 'Workflows'],
    concepts: [
      // Basics
      {
        category: 'Basics',
        title: 'Variables & Types',
        desc: 'Python is dynamically typed — you don\'t declare types, but they exist at runtime.',
        code: 'name = "Felipe"          # str\nage = 30                 # int\nratio = 0.5              # float\nactive = True            # bool\nitems = None             # NoneType\n\ntype(age)                # <class \'int\'>',
        usage: 'Type hints (`age: int = 30`) are optional but increasingly standard — they help with editor autocomplete and tools like mypy.',
      },
      {
        category: 'Basics',
        title: 'f-strings',
        desc: 'The modern way to interpolate values into strings.',
        code: 'name = "Felipe"\ncount = 42\n\nprint(f"Hello, {name}!")\nprint(f"Found {count} items")\nprint(f"Ratio: {count / 100:.2f}")    # formatting\nprint(f"{name=}")                      # → name=\'Felipe\'',
        usage: 'Always prefer f-strings over `.format()` or `%` formatting. The `=` debug syntax is great for quick logging.',
      },
      {
        category: 'Basics',
        title: 'Control Flow',
        desc: 'Conditional execution with if/elif/else. Indentation defines blocks — there are no braces.',
        code: 'status = response.status_code\n\nif status == 200:\n    print("OK")\nelif status < 500:\n    print("Client error")\nelse:\n    print("Server error")\n\n# ternary\nmsg = "OK" if status == 200 else "Error"',
        usage: 'Standard indent is 4 spaces, never tabs. Most editors (and tools like ruff/black) enforce this automatically.',
      },
      {
        category: 'Basics',
        title: 'Loops',
        desc: 'Iterate over sequences with for, repeat conditions with while.',
        code: 'for item in items:\n    print(item)\n\nfor i, item in enumerate(items):\n    print(f"{i}: {item}")\n\nfor key, value in config.items():\n    print(f"{key} = {value}")\n\nwhile queue:\n    process(queue.pop())',
        usage: '`enumerate` for index+value, `.items()` for dict pairs, `zip` for parallel iteration. Avoid `for i in range(len(items))` — it\'s a code smell.',
      },
      {
        category: 'Basics',
        title: 'Functions',
        desc: 'Reusable blocks of logic with arguments and an optional return value.',
        code: 'def greet(name: str, greeting: str = "Hello") -> str:\n    return f"{greeting}, {name}!"\n\ngreet("Felipe")                  # uses default\ngreet("Felipe", greeting="Hey")  # keyword arg\n\n# *args and **kwargs\ndef log(*args, **kwargs):\n    print(args, kwargs)',
        usage: 'Use type hints in any code others will read. Default arguments must be immutable — never `def f(x=[])` (it\'s shared across calls).',
      },
      {
        category: 'Basics',
        title: 'None & Truthiness',
        desc: 'Empty containers, 0, and None all evaluate as False in conditions.',
        code: 'items = []\nif not items:\n    print("empty")\n\nvalue = config.get("key")     # returns None if missing\nif value is None:\n    value = "default"\n\n# short version\nvalue = config.get("key") or "default"',
        usage: 'Always use `is None` / `is not None` to compare with None — `==` works but is non-idiomatic.',
      },

      // Data Structures
      {
        category: 'Data Structures',
        title: 'Lists',
        desc: 'Ordered, mutable sequence — your default choice for collections.',
        code: 'items = [1, 2, 3]\nitems.append(4)              # [1, 2, 3, 4]\nitems[0]                     # 1\nitems[-1]                    # 4 (last)\nitems[1:3]                   # [2, 3] (slice)\nlen(items)                   # 4\n[x * 2 for x in items]       # comprehension',
        usage: 'Slicing is one of Python\'s superpowers — `[start:end:step]`. Negative indices count from the end.',
      },
      {
        category: 'Data Structures',
        title: 'Dictionaries',
        desc: 'Key-value mapping with O(1) lookup.',
        code: 'user = {"name": "Felipe", "role": "admin"}\nuser["name"]                  # "Felipe"\nuser.get("email", "N/A")      # safe lookup with default\nuser["email"] = "f@x.com"     # add/update\n\nfor key, value in user.items():\n    print(key, value)',
        usage: 'Use `.get()` to avoid KeyError when a key might be missing. Dicts preserve insertion order since 3.7.',
      },
      {
        category: 'Data Structures',
        title: 'Tuples & Sets',
        desc: 'Tuples are immutable lists; sets are unordered collections of unique items.',
        code: '# tuples — fixed structure\npoint = (10, 20)\nx, y = point                 # unpacking\n\n# sets — uniqueness, fast membership tests\nseen = {1, 2, 3}\nseen.add(4)\n2 in seen                    # True (O(1))\nlist(set(items))             # dedupe a list',
        usage: 'Tuples for fixed records (coordinates, multiple return values). Sets when you need uniqueness or fast `in` checks.',
      },
      {
        category: 'Data Structures',
        title: 'Comprehensions',
        desc: 'Concise way to build a list, dict, or set from an iterable.',
        code: '# list comprehension\nevens = [x for x in range(10) if x % 2 == 0]\n\n# dict comprehension\nsquares = {x: x**2 for x in range(5)}\n\n# filter + transform\nnames = [u["name"].upper() for u in users if u["active"]]',
        usage: 'Readable for simple cases. If a comprehension grows past one line or has nested loops, use a regular for-loop instead.',
      },
      {
        category: 'Data Structures',
        title: 'Iterating Patterns',
        desc: 'enumerate, zip, and dict.items() cover most iteration needs.',
        code: 'names = ["Ana", "Bob", "Cy"]\nages = [30, 25, 28]\n\nfor i, name in enumerate(names):\n    print(i, name)\n\nfor name, age in zip(names, ages):\n    print(name, age)\n\nfor k, v in config.items():\n    print(k, v)',
        usage: 'These three handle 90% of iteration patterns. `zip` stops at the shortest iterable.',
      },

      // Modules & Env (uv-focused)
      {
        category: 'Modules & Env',
        title: 'Imports',
        desc: 'Bring code from other files or installed packages into your script.',
        code: 'import os                            # whole module\nfrom pathlib import Path             # specific name\nfrom datetime import datetime as dt  # alias\n\n# your own modules\nfrom utils.auth import validate',
        usage: 'Group imports: stdlib first, then third-party, then your own — separated by blank lines. Tools like ruff enforce this automatically.',
      },
      {
        category: 'Modules & Env',
        title: 'uv Project Setup',
        desc: 'uv handles your project\'s virtual environment, dependencies, lockfile, and Python version automatically.',
        code: 'uv init my-project          # new project scaffold\ncd my-project\n\nuv add requests              # adds to pyproject.toml + installs\nuv add --dev pytest ruff     # dev-only deps\nuv remove requests\nuv sync                      # install everything from pyproject.toml',
        usage: '`uv init` creates `.venv/` (auto-gitignored), `pyproject.toml`, and `uv.lock`. No need to activate the venv manually — `uv run` handles it.',
      },
      {
        category: 'Modules & Env',
        title: 'uv run',
        desc: 'Run a Python command inside the project\'s environment without activating it.',
        code: 'uv run python script.py\nuv run pytest\nuv run python -m mypackage.cli\n\n# one-off scripts with inline deps\nuv run --with requests script.py',
        usage: 'Replaces the old `source .venv/bin/activate && python ...` ritual. `uv run` auto-syncs deps if pyproject.toml has changed since the last run.',
      },
      {
        category: 'Modules & Env',
        title: 'Python Versions',
        desc: 'uv installs and switches between Python versions per project.',
        code: 'uv python install 3.12\nuv python install 3.11\nuv python list             # available + installed\n\n# pin the project to a version\nuv python pin 3.12         # writes .python-version\n\n# one-off run with a different version\nuv run --python 3.11 script.py',
        usage: 'No more `pyenv`, `brew install python@3.x`, or fighting system Python. uv installs versions side-by-side and picks the right one based on `.python-version`.',
      },
      {
        category: 'Modules & Env',
        title: 'pyproject.toml',
        desc: 'The project config file — declares dependencies, Python version, scripts, and tool settings.',
        code: '[project]\nname = "my-tool"\nversion = "0.1.0"\nrequires-python = ">=3.12"\ndependencies = [\n    "requests>=2.31",\n    "pydantic>=2.0",\n]\n\n[tool.uv]\ndev-dependencies = [\n    "pytest>=8.0",\n    "ruff>=0.1",\n]',
        usage: 'One file replaces `requirements.txt`, `setup.py`, and various tool configs. Tools like ruff and pytest can also be configured here under `[tool.*]` sections.',
      },
      {
        category: 'Modules & Env',
        title: 'uv tool (uvx)',
        desc: 'Install Python CLIs globally without polluting any project\'s environment.',
        code: 'uv tool install ruff\nuv tool install httpie\nuv tool list\n\n# run without installing\nuv tool run black file.py\nuvx black file.py            # short form',
        usage: 'For tools you want available everywhere (linters, formatters, CLIs). Each gets its own isolated env. `uvx` is shorthand for `uv tool run` — handy for one-offs.',
      },
      {
        category: 'Modules & Env',
        title: 'Standard Library',
        desc: 'Modules you\'ll reach for constantly: pathlib, json, os, datetime, re.',
        code: 'from pathlib import Path\nimport json, os, re\nfrom datetime import datetime, timedelta\n\nPath("config.json").read_text()\njson.loads(raw)\nos.environ.get("API_KEY")\ndatetime.now() - timedelta(days=7)\nre.match(r"^\\d+$", "123")',
        usage: 'Prefer `pathlib` over the older `os.path`. `os.environ` for env vars. `json` for parsing API responses and config files.',
      },

      // Utilities
      {
        category: 'Utilities',
        title: 'File I/O',
        desc: 'Read and write files with the `with` statement to auto-close.',
        code: '# read\nwith open("data.txt") as f:\n    content = f.read()\n\n# read line by line\nwith open("log.txt") as f:\n    for line in f:\n        process(line.strip())\n\n# write\nwith open("out.txt", "w") as f:\n    f.write("hello\\n")',
        usage: 'Always use `with` — it closes the file even on errors. For JSON, use `json.load(f)` / `json.dump(data, f)`.',
      },
      {
        category: 'Utilities',
        title: 'Error Handling',
        desc: 'try/except catches exceptions; handle specific ones, not bare `except`.',
        code: 'try:\n    data = json.loads(raw)\nexcept json.JSONDecodeError as e:\n    print(f"Bad JSON: {e}")\n    data = {}\nexcept Exception as e:\n    logger.exception("Unexpected error")\n    raise\nfinally:\n    cleanup()',
        usage: 'Catch specific exceptions when you can recover. Bare `except:` hides bugs. Use `logger.exception` to capture the full traceback.',
      },
      {
        category: 'Utilities',
        title: 'pathlib',
        desc: 'Object-oriented file paths — modern replacement for `os.path`.',
        code: 'from pathlib import Path\n\np = Path("data") / "users.json"     # joining\np.exists()\np.parent                            # Path("data")\np.suffix                            # ".json"\np.read_text()\np.write_text("hello")\n\nfor f in Path(".").glob("*.py"):\n    print(f)',
        usage: 'The `/` operator for joining paths is way cleaner than `os.path.join`. Works on all platforms — handles Windows backslashes for you.',
      },
      {
        category: 'Utilities',
        title: 'subprocess',
        desc: 'Run shell commands from Python and capture output.',
        code: 'import subprocess\n\nresult = subprocess.run(\n    ["git", "status", "--short"],\n    capture_output=True,\n    text=True,\n    check=True,\n)\nprint(result.stdout)',
        usage: 'Always pass arguments as a list (not a string) to avoid shell injection. `check=True` raises on non-zero exit codes — saves you from silent failures.',
      },
      {
        category: 'Utilities',
        title: 'argparse',
        desc: 'Build CLI tools with parsed flags and positional arguments.',
        code: 'import argparse\n\nparser = argparse.ArgumentParser()\nparser.add_argument("filename")\nparser.add_argument("--verbose", "-v", action="store_true")\nparser.add_argument("--limit", type=int, default=10)\n\nargs = parser.parse_args()\nprint(args.filename, args.verbose, args.limit)',
        usage: 'Auto-generates `--help` text. For richer CLIs (subcommands, colored output), libraries like `click` or `typer` are popular alternatives.',
      },

      // Workflows (uv-focused)
      {
        category: 'Workflows',
        title: 'Set Up a New Project',
        desc: 'Bootstrap a new Python project with uv. One tool handles the venv, dependencies, Python version, and lockfile.',
        code: '# 1. Create the project scaffold\nuv init my-tool\ncd my-tool\n\n# 2. Pin a Python version\nuv python pin 3.12\n\n# 3. Add runtime + dev deps\nuv add requests pydantic\nuv add --dev pytest ruff\n\n# 4. Initialize git\ngit init\n# uv has already created a .gitignore covering .venv/ etc.\ngit add . && git commit -m "Initial commit"',
        usage: '`uv init` scaffolds a working project in seconds — pyproject.toml, .gitignore, .python-version, README. `uv add` updates pyproject.toml and the lockfile in one step. The lockfile (`uv.lock`) should be committed.',
      },
      {
        category: 'Workflows',
        title: 'Run Scripts & Modules',
        desc: 'Two main ways to run Python code with uv, plus the `__main__` guard for files meant to be both run and imported.',
        code: '# 1. Run a script or module\nuv run python script.py\nuv run python -m mypackage.cli      # for packages\n\n# 2. Run an entry point defined in pyproject.toml\nuv run mytool                       # if [project.scripts] defines it\n\n# 3. The "main" guard — only runs when executed directly\ndef main():\n    ...\n\nif __name__ == "__main__":\n    main()',
        usage: 'Use `python -m` form when running anything inside a package — direct execution breaks relative imports. The `__main__` guard prevents code from running when the file is imported elsewhere.',
      },
      {
        category: 'Workflows',
        title: 'Read JSON Config',
        desc: 'A common pattern: parse a JSON config file with sensible error handling and fallback to defaults.',
        code: 'import json\nfrom pathlib import Path\n\nCONFIG_PATH = Path.home() / ".myapp" / "config.json"\nDEFAULTS = {"theme": "dark", "port": 8080}\n\ndef load_config() -> dict:\n    if not CONFIG_PATH.exists():\n        return DEFAULTS\n    try:\n        user = json.loads(CONFIG_PATH.read_text())\n        return {**DEFAULTS, **user}\n    except json.JSONDecodeError as e:\n        print(f"Invalid config: {e}")\n        return DEFAULTS',
        usage: 'Merge defaults with user config so missing keys fall back gracefully. For richer validation (types, required fields), reach for pydantic.',
      },
      {
        category: 'Workflows',
        title: 'Debug',
        desc: 'Three escalating tools — print, breakpoint, and logging. Each is appropriate at different times.',
        code: '# 1. print debugging — quick and dirty\nprint(f"{user=} {response.status=}")\n\n# 2. drop into pdb at any line\nbreakpoint()                # then: n, s, c, p var, q\n\n# 3. logging — for real apps\nimport logging\nlogging.basicConfig(level=logging.DEBUG)\nlog = logging.getLogger(__name__)\nlog.debug("payload: %s", payload)',
        usage: '`breakpoint()` is built into Python 3.7+ — it pauses execution so you can inspect state interactively. For production code use logging, never print, so output can be configured per environment.',
      },
      {
        category: 'Workflows',
        title: 'Test with pytest',
        desc: 'The standard Python testing framework. Tests are functions starting with `test_` in files named `test_*.py`.',
        code: '# test_auth.py\nfrom auth import validate_email\n\ndef test_valid_email():\n    assert validate_email("a@b.com")\n\ndef test_rejects_missing_at():\n    assert not validate_email("invalid")\n\n# parametrize for many cases\nimport pytest\n\n@pytest.mark.parametrize("email", ["a@b.com", "x@y.io"])\ndef test_various_valid(email):\n    assert validate_email(email)\n\n# run\nuv run pytest -v\nuv run pytest tests/test_auth.py::test_valid_email',
        usage: 'Test what\'s likely to break, not implementation details. Run with `-v` for verbose output, `-k name` to filter by test name, `-x` to stop at first failure.',
      },
    ],
  },

  Bash: {
    title: 'Bash Essentials',
    description: 'Shell scripting fundamentals and the everyday utilities that make the command line a dev superpower.',
    categories: ['All', 'Basics', 'Control Flow', 'Files & Streams', 'Utilities', 'Workflows'],
    concepts: [
      // Basics
      {
        category: 'Basics',
        title: 'Variables',
        desc: 'Assign without spaces around `=`; reference with `$`.',
        code: 'name="Felipe"\ncount=42\necho "$name has $count items"\n\n# readonly\nreadonly API_URL="https://api.example.com"\n\n# default if unset\nport="${PORT:-8080}"',
        usage: 'Always quote `"$var"` to handle spaces and special chars. The `${VAR:-default}` pattern is essential for env-driven scripts.',
      },
      {
        category: 'Basics',
        title: 'Quoting',
        desc: 'Single quotes preserve everything literally; double quotes allow variable expansion.',
        code: 'name="Felipe"\necho \'$name\'        # → $name\necho "$name"        # → Felipe\necho "Hi, $name!"   # → Hi, Felipe!\n\n# command substitution needs double quotes\ntoday="$(date +%Y-%m-%d)"\necho "Today is $today"',
        usage: 'Default to double quotes around variables. Use single quotes when you literally want `$` in the output (regex patterns, awk scripts).',
      },
      {
        category: 'Basics',
        title: 'echo & printf',
        desc: '`echo` for simple output, `printf` when you need formatting or precise control.',
        code: 'echo "Hello, world"\necho -n "no newline"\n\nprintf "%s is %d years old\\n" "$name" "$age"\nprintf "%.2f\\n" 3.14159          # → 3.14\nprintf "[%-10s]\\n" "left"        # → [left      ]',
        usage: 'Prefer `printf` in scripts — `echo`\'s behavior with flags varies between systems. `printf` is portable and POSIX-standard.',
      },
      {
        category: 'Basics',
        title: 'Command Substitution',
        desc: 'Capture the output of a command into a variable.',
        code: 'today="$(date +%Y-%m-%d)"\nbranch="$(git rev-parse --abbrev-ref HEAD)"\ncount="$(ls *.txt | wc -l)"\n\necho "Backup-${today}-${branch}.tar.gz"',
        usage: 'Always use `$(...)` not backticks — it nests cleanly and is easier to read in any non-trivial expression.',
      },
      {
        category: 'Basics',
        title: 'Exit Codes',
        desc: 'Every command returns 0 (success) or non-zero (failure). Available as `$?`.',
        code: 'ls /tmp\necho "Exit code: $?"      # 0\n\nls /no/such/path\necho "Exit code: $?"      # 2\n\n# use directly in conditions\nif grep -q "ERROR" log.txt; then\n    echo "found errors"\nfi',
        usage: 'Don\'t check `$?` after the command — use the command directly in `if`. `&&` chains success, `||` chains failure: `cmd1 && cmd2 || echo "failed"`.',
      },
      {
        category: 'Basics',
        title: 'Shebang & Permissions',
        desc: 'The shebang line tells the OS which interpreter to use; the file must be executable.',
        code: '#!/usr/bin/env bash\n# script.sh\necho "Hello from $(basename "$0")"\n\n# make it runnable\nchmod +x script.sh\n./script.sh',
        usage: 'Use `#!/usr/bin/env bash` (not `/bin/bash`) — it finds bash via PATH, which works across Linux distros and macOS. `chmod +x` once, then run with `./`.',
      },

      // Control Flow
      {
        category: 'Control Flow',
        title: 'if / else',
        desc: 'Conditional execution. Test expressions go in `[[ ... ]]`.',
        code: 'if [[ -f "$file" ]]; then\n    echo "exists"\nelif [[ -d "$file" ]]; then\n    echo "is a directory"\nelse\n    echo "not found"\nfi\n\n# string compare\nif [[ "$env" == "prod" ]]; then ...; fi\n\n# number compare\nif (( count > 10 )); then ...; fi',
        usage: 'Use `[[ ]]` for strings/files (modern bash) and `(( ))` for arithmetic. Avoid the older single-bracket `[ ]` — it has subtle quoting issues.',
      },
      {
        category: 'Control Flow',
        title: 'for loops',
        desc: 'Iterate over a list, range, or files matching a glob.',
        code: '# over a list\nfor env in dev staging prod; do\n    echo "Deploying to $env"\ndone\n\n# over files\nfor file in *.log; do\n    gzip "$file"\ndone\n\n# numeric range\nfor i in {1..5}; do\n    echo "Attempt $i"\ndone',
        usage: 'Always quote `"$file"` in case filenames have spaces. For C-style loops use `for ((i=0; i<10; i++))`.',
      },
      {
        category: 'Control Flow',
        title: 'while loops',
        desc: 'Repeat while a condition holds. Most useful for reading input line-by-line and polling.',
        code: '# read a file line by line\nwhile IFS= read -r line; do\n    echo "Line: $line"\ndone < input.txt\n\n# poll until something happens\nwhile ! curl -sf http://localhost:8080/health; do\n    echo "Waiting for service..."\n    sleep 2\ndone',
        usage: '`IFS= read -r` is the canonical safe way to read lines — it preserves whitespace and treats backslashes literally.',
      },
      {
        category: 'Control Flow',
        title: 'case',
        desc: 'Match a value against multiple patterns — cleaner than long if/elif chains.',
        code: 'case "$1" in\n    start)   echo "Starting..." ;;\n    stop)    echo "Stopping..." ;;\n    restart) echo "Restarting..." ;;\n    *.log)   echo "It\'s a log file" ;;\n    *)       echo "Unknown: $1" ;;\nesac',
        usage: 'Patterns support globs, so `*.log` matches any .log file. `*)` is the default catchall — always include it for safety.',
      },

      // Files & Streams
      {
        category: 'Files & Streams',
        title: 'Redirection',
        desc: 'Send command output to a file or read input from a file.',
        code: 'command > out.txt           # overwrite\ncommand >> out.txt          # append\ncommand < input.txt         # read from file\n\n# combined\n./build.sh > build.log 2>&1 # stdout + stderr to log\n./build.sh &> build.log     # shorthand (bash only)',
        usage: '`>` overwrites — be careful, no warning. Use `>>` to append. `2>&1` redirects stderr to wherever stdout is currently going.',
      },
      {
        category: 'Files & Streams',
        title: 'Pipes',
        desc: 'Connect the stdout of one command to the stdin of the next.',
        code: 'ps aux | grep python | grep -v grep\n\ncat access.log \\\n  | awk \'{print $7}\' \\\n  | sort | uniq -c \\\n  | sort -rn | head\n\ngit log --oneline | wc -l       # commit count',
        usage: 'Pipes are how Unix tools compose. Each tool does one thing — chain them to build pipelines that would be pages of code in other languages.',
      },
      {
        category: 'Files & Streams',
        title: 'File Tests',
        desc: 'Common tests inside `[[ ]]` for checking file properties.',
        code: '[[ -f file ]]    # is a regular file\n[[ -d dir ]]     # is a directory\n[[ -e path ]]    # exists (any kind)\n[[ -r file ]]    # readable\n[[ -w file ]]    # writable\n[[ -x file ]]    # executable\n[[ -s file ]]    # not empty\n[[ -z "$var" ]]  # variable is empty\n[[ -n "$var" ]]  # variable is non-empty',
        usage: 'Always quote variables in tests: `[[ -f "$path" ]]`. Combine with `&&` / `||` for compact logic: `[[ -f .env ]] && source .env`.',
      },
      {
        category: 'Files & Streams',
        title: 'stdin / stdout / stderr',
        desc: 'File descriptors 0, 1, 2 — input, normal output, error output.',
        code: '# send errors to a file\n./build.sh 2> errors.log\n\n# discard noise\nfind / -name "*.log" 2> /dev/null\n\n# only errors, throw away stdout\n./build.sh > /dev/null 2> errors.log\n\n# write to stderr from your script\necho "Warning: file missing" >&2',
        usage: '`/dev/null` is the bit bucket — anything sent there disappears. Print errors to stderr (`>&2`) so they show up even when stdout is piped or redirected.',
      },
      {
        category: 'Files & Streams',
        title: 'Globs & Wildcards',
        desc: 'Pattern matching for filenames.',
        code: 'ls *.py              # all .py in cwd\nls **/*.py           # recursive (needs shopt -s globstar)\nls report_?.txt      # exactly one char\nls log[0-9].txt      # one digit\n\nshopt -s nullglob    # no match → empty list (safer)',
        usage: 'Without `nullglob`, `for f in *.log` will iterate once with the literal string `*.log` if no files match. Set it at the top of any script that loops over globs.',
      },

      // Utilities
      {
        category: 'Utilities',
        title: 'grep',
        desc: 'Search for patterns in files or stdin.',
        code: 'grep "ERROR" app.log\ngrep -i "warning" *.log     # case-insensitive\ngrep -r "TODO" .            # recursive\ngrep -v "DEBUG" app.log     # invert (NOT matching)\ngrep -c "ERROR" app.log     # count\ngrep -n "ERROR" app.log     # show line numbers\ngrep -E "^(error|warn)" log # extended regex',
        usage: '`grep -rn pattern .` to search a project with line numbers — your daily driver. If `rg` (ripgrep) is installed, use it instead — much faster and respects .gitignore.',
      },
      {
        category: 'Utilities',
        title: 'find',
        desc: 'Locate files by name, type, modification time, or other attributes.',
        code: 'find . -name "*.py"\nfind . -type f -name "*.log"\nfind . -type d -name "node_modules" -prune\nfind . -mtime -7              # modified in last 7 days\nfind . -size +10M             # larger than 10MB\nfind . -name "*.tmp" -delete  # find + delete',
        usage: 'Test with `-print` first before adding `-delete` or `-exec rm`. The `-prune` trick excludes whole directories from the search.',
      },
      {
        category: 'Utilities',
        title: 'sed',
        desc: 'Stream editor — find/replace and basic transforms on text.',
        code: 'sed \'s/foo/bar/\' file.txt        # first per line\nsed \'s/foo/bar/g\' file.txt       # all\nsed -i \'\' \'s/foo/bar/g\' file     # in-place (macOS)\nsed -i \'s/foo/bar/g\' file        # in-place (Linux)\n\nsed -n \'10,20p\' file.txt         # print lines 10-20',
        usage: 'macOS sed differs from GNU sed — `-i` needs an empty argument on macOS (`-i \'\'`). For anything complex, reach for awk or a real language.',
      },
      {
        category: 'Utilities',
        title: 'awk',
        desc: 'Column-oriented text processing — powerful for tabular data.',
        code: 'awk \'{print $1}\' file.txt        # first column\nawk -F, \'{print $2}\' file.csv    # CSV (comma sep)\n\n# sum column 3\nawk \'{sum += $3} END {print sum}\' data.txt\n\n# filter then print\nps aux | awk \'$3 > 1 {print $2, $11}\'  # PIDs > 1% CPU',
        usage: 'When you need to extract or aggregate columns, awk beats grep+sed combinations. `$0` is the whole line, `$1..$N` are fields.',
      },
      {
        category: 'Utilities',
        title: 'xargs',
        desc: 'Build commands from stdin — useful for chaining `find` to other commands.',
        code: 'find . -name "*.tmp" | xargs rm\n\n# safer: handles spaces in filenames\nfind . -name "*.tmp" -print0 | xargs -0 rm\n\n# one item per call with placeholder\nls *.jpg | xargs -I {} mv {} processed/\n\n# parallel\ncat urls.txt | xargs -P 4 -I {} curl -sO {}',
        usage: 'Always use `-print0` + `-0` when filenames might have spaces. `-P N` runs N commands in parallel — handy for I/O-bound tasks like batch downloads.',
      },
      {
        category: 'Utilities',
        title: 'jq',
        desc: 'Like sed/awk for JSON. Essential for working with APIs and structured logs.',
        code: 'curl -s api.example.com/users | jq \'.\'\ncurl -s api.example.com/users | jq \'.[0].name\'\ncurl -s api.example.com/users | jq \'.[] | .email\'\ncurl -s api.example.com/users | jq \'map(select(.active))\'\n\n# raw (unquoted) string output\njq -r \'.token\' response.json',
        usage: '`-r` removes JSON quoting from string output — needed when piping into other commands. `jq \'.\'` alone pretty-prints any JSON. Not always pre-installed; `brew install jq` or `apt install jq`.',
      },

      // Workflows
      {
        category: 'Workflows',
        title: 'Robust Script Template',
        desc: 'A safe starting point for any new script. The `set` options catch errors that would otherwise pass silently.',
        code: '#!/usr/bin/env bash\nset -euo pipefail\n\n# -e  exit on any error\n# -u  error on undefined variables\n# -o pipefail  fail if any pipe segment fails\n\nreadonly LOG_DIR="${LOG_DIR:-/var/log/myapp}"\n\nmain() {\n    local input="$1"\n    echo "Processing $input"\n    # ...\n}\n\nmain "$@"',
        usage: '`set -euo pipefail` should be on every script you write. Without `-e`, a failing command keeps going. Without `-u`, typos in variable names silently expand to empty strings — a classic source of bugs.',
      },
      {
        category: 'Workflows',
        title: 'Process Files in a Loop',
        desc: 'A common pattern: iterate over matching files and run something on each, with proper handling of edge cases like spaces and nested directories.',
        code: '#!/usr/bin/env bash\nset -euo pipefail\nshopt -s nullglob\n\n# simple version (one directory)\nfor file in logs/*.log; do\n    gzip "$file"\ndone\n\n# with find (handles deep trees + weird names)\nfind logs -type f -name "*.log" -print0 \\\n    | while IFS= read -r -d \'\' file; do\n        gzip "$file"\n    done',
        usage: 'Use the simple `for` loop for files in one directory. Switch to `find -print0` when you have nested paths or filenames that might contain spaces, newlines, or quotes.',
      },
      {
        category: 'Workflows',
        title: 'Args & User Input',
        desc: 'Standard pattern for parsing positional args and flags in a script.',
        code: '#!/usr/bin/env bash\nset -euo pipefail\n\nusage() { echo "Usage: $0 [-v] <input>"; exit 1; }\n\nverbose=false\nwhile getopts "v" opt; do\n    case "$opt" in\n        v) verbose=true ;;\n        *) usage ;;\n    esac\ndone\nshift $((OPTIND - 1))\n\n[[ $# -lt 1 ]] && usage\ninput="$1"\n\n$verbose && echo "Processing $input"',
        usage: '`getopts` handles short flags well. For complex CLIs (long flags, subcommands) consider rewriting in Python with argparse — bash gets unwieldy fast past a few options.',
      },
      {
        category: 'Workflows',
        title: 'Background Jobs',
        desc: 'Run commands asynchronously and manage long-running processes.',
        code: '# run in background\nlong-task &\n\n# capture PID, wait for it\nlong-task &\npid=$!\nwait "$pid"\n\n# multiple in parallel, wait for all\ntask1 & task2 & task3 &\nwait\n\n# survive logout\nnohup long-task > out.log 2>&1 &\n\n# see all background jobs\njobs',
        usage: '`&` backgrounds; `wait` blocks until done; `nohup` detaches from the terminal so the process survives the shell exiting. For anything long-running and important, use a proper supervisor (systemd, launchd, supervisord).',
      },
      {
        category: 'Workflows',
        title: 'Cron / Scheduled Tasks',
        desc: 'Run scripts on a schedule. Cron is the standard Unix scheduler and is everywhere.',
        code: '# edit your crontab\ncrontab -e\n\n# format: m h dom mon dow command\n0 2 * * *     /usr/local/bin/backup.sh\n*/15 * * * *  /usr/local/bin/healthcheck.sh\n0 9 * * 1-5   /usr/local/bin/daily-report.sh\n\n# show your jobs\ncrontab -l\n\n# always log output for debugging\n0 2 * * * /path/to/script.sh >> /var/log/script.log 2>&1',
        usage: 'Cron runs with a minimal environment — always use absolute paths and explicitly redirect output. Test scripts with `bash -l -c "command"` to mimic cron\'s environment. On modern Linux, systemd timers are an alternative with better logging.',
      },
    ],
  },
};

const categoryStyles = {
  // Position 1 — blue
  Basics: 'bg-blue-50 text-blue-700 border-blue-100',
  Shell: 'bg-blue-50 text-blue-700 border-blue-100',
  // Position 2 — emerald
  Branching: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  'Data Structures': 'bg-emerald-50 text-emerald-700 border-emerald-100',
  'Control Flow': 'bg-emerald-50 text-emerald-700 border-emerald-100',
  Files: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  // Position 3 — violet
  Remote: 'bg-violet-50 text-violet-700 border-violet-100',
  'Modules & Env': 'bg-violet-50 text-violet-700 border-violet-100',
  'Files & Streams': 'bg-violet-50 text-violet-700 border-violet-100',
  Network: 'bg-violet-50 text-violet-700 border-violet-100',
  // Position 4 — amber
  Utilities: 'bg-amber-50 text-amber-700 border-amber-100',
  Data: 'bg-amber-50 text-amber-700 border-amber-100',
  // Position 5 — rose
  Workflows: 'bg-rose-50 text-rose-700 border-rose-100',
};

const topicNames = Object.keys(topics);

export default function LearningCards() {
  const [activeTopic, setActiveTopic] = useState('Fundamentals');
  const [activeCategory, setActiveCategory] = useState('All');

  const topic = topics[activeTopic];
  const filtered =
    activeCategory === 'All'
      ? topic.concepts
      : topic.concepts.filter((c) => c.category === activeCategory);

  const handleTopicChange = (t) => {
    setActiveTopic(t);
    setActiveCategory('All');
  };

  return (
    <div
      className="min-h-screen bg-stone-50 text-stone-900"
      style={{ fontFamily: 'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="text-xs uppercase tracking-[0.18em] text-stone-500 mb-3">Dev Toolkit</div>
          <h1 className="text-4xl font-semibold tracking-tight mb-2">{topic.title}</h1>
          <p className="text-stone-600 max-w-2xl">{topic.description}</p>
        </div>

        {/* Topic tabs */}
        <div className="border-b border-stone-200 mb-6 flex gap-1 overflow-x-auto">
          {topicNames.map((t) => (
            <button
              key={t}
              onClick={() => handleTopicChange(t)}
              className={`px-4 py-3 -mb-px text-sm font-medium transition border-b-2 whitespace-nowrap ${
                activeTopic === t
                  ? 'border-stone-900 text-stone-900'
                  : 'border-transparent text-stone-500 hover:text-stone-800'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {topic.categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                activeCategory === c
                  ? 'bg-stone-900 text-white'
                  : 'bg-white text-stone-700 border border-stone-200 hover:border-stone-400'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((c, i) => (
            <div
              key={`${activeTopic}-${c.category}-${c.title}-${i}`}
              className="bg-white border border-stone-200 rounded-xl p-5 hover:border-stone-300 hover:shadow-sm transition flex flex-col"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-lg font-semibold tracking-tight leading-snug">{c.title}</h3>
                <span
                  className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border whitespace-nowrap ${
                    categoryStyles[c.category] || 'bg-stone-50 text-stone-700 border-stone-200'
                  }`}
                >
                  {c.category}
                </span>
              </div>

              <p className="text-sm text-stone-600 mb-4 leading-relaxed">{c.desc}</p>

              <pre
                className="bg-stone-50 border border-stone-200 rounded-lg p-3 text-xs text-stone-800 overflow-x-auto mb-3 whitespace-pre"
                style={{ fontFamily: 'ui-monospace, "SF Mono", Menlo, Consolas, monospace' }}
              >
                {c.code}
              </pre>

              <div className="text-xs text-stone-500 leading-relaxed mt-auto">
                <span className="font-medium text-stone-700">When: </span>
                {c.usage}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-stone-200 text-xs text-stone-500 flex items-center justify-between">
          <span>
            {filtered.length} {filtered.length === 1 ? 'card' : 'cards'}
            {activeCategory !== 'All' ? ` in ${activeCategory}` : ''} · {activeTopic}
          </span>
          <span className="font-mono">{activeTopic.toLowerCase()} --help</span>
        </div>
      </div>
    </div>
  );
}
