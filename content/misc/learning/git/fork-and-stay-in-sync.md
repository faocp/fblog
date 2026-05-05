+++
title = "Fork & Stay in Sync"
front = "The standard workflow for contributing to a repo you don't have write access to — typical for open source."
category = "workflows"
difficulty = "intermediate"
weight = 250
+++

```sh
# 1. Click "Fork" on GitHub, then clone your fork
git clone git@github.com:you/their-project.git
cd their-project

# 2. Add the original repo as 'upstream'
git remote add upstream git@github.com:them/their-project.git
git remote -v

# 3. Periodically pull updates from upstream
git fetch upstream
git switch main
git merge upstream/main
git push                    # update your fork

# 4. Make changes on a branch, push to your fork, open PR upstream
git switch -c fix/typo-in-readme
# ...edit, commit, push...
gh pr create --fill
```

Two remotes: `origin` is your fork, `upstream` is the original repo. PRs go from a branch on your fork to upstream's main. Keep your fork's main in sync with upstream so new branches start from the latest code.
