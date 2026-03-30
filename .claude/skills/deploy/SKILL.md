---
name: deploy
description: Push current branch to GitHub and merge into main. Use when the user wants to publish blog changes, push commits, or ship updates to the site.
disable-model-invocation: true
allowed-tools: Bash(git *), Bash(gh *)
---

## Current repo state
- Branch: !`git branch --show-current`
- Status: !`git status --short`
- Unpushed commits: !`git log @{u}..HEAD --oneline 2>/dev/null || git log HEAD --oneline -5`

## Deploy workflow

Follow these steps carefully:

1. **Check for uncommitted changes** — if there are any, ask the user whether to commit them first (suggest a commit message based on the diff). Do not auto-commit without asking.

2. **Push the current branch** to origin:
   ```
   git push -u origin <current-branch>
   ```

3. **Merge into main**:
   - If already on `main`, the push is enough — no merge needed.
   - If on a feature branch, create a PR with `gh pr create` and then merge it with `gh pr merge --merge --delete-branch`, OR merge locally:
     ```
     git checkout main && git merge <branch> && git push origin main
     ```
   - Prefer creating a PR if the branch has multiple commits or a meaningful name. For single-commit or draft changes, a direct local merge is fine.

4. **Confirm success** by reporting the final state: which commits landed on main and the remote URL.

> Always confirm with the user before force-pushing or deleting branches.
