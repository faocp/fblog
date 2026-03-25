# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

fblog is a personal blog built with [Hugo](https://gohugo.io/). It uses a fully custom theme (no external theme dependency) for maximum control over the design. The aesthetic is minimalist and terminal-inspired, modeled after [nelson.cloud](https://nelson.cloud/).

Deployed to GitHub Pages at `github.com/faocp/fblog`.

## Commands

```bash
# Bootstrap (first time only — directory already exists)
hugo new site . --force

# Dev server with drafts
hugo server -D

# Production build (outputs to public/)
hugo

# New blog post
hugo new content posts/<slug>/index.md

# New standalone page
hugo new content <page>.md
```

## Architecture

```
hugo.toml          # Site config: baseURL, title, menus, params
content/
  posts/           # Blog posts as leaf bundles (posts/<slug>/index.md)
  about.md
  links.md
layouts/           # All custom templates (no theme/)
  _default/
  partials/
assets/            # CSS and JS processed by Hugo Pipes
static/            # Fonts, images, favicons (served as-is)
archetypes/        # Front matter templates for hugo new content
```

## Design Goals

- **Aesthetic**: minimalist, terminal/developer feel — ASCII art header, monospace-friendly
- **Features**: dark/light mode toggle (respects system preference, stored in localStorage), post metadata (date, word count, categories)
- **No JS frameworks** — vanilla CSS + minimal JS only
- **Navigation**: Home, Posts, About (extend as needed)

## Deployment

Build with `hugo` and push `public/` to the `gh-pages` branch, or automate via a GitHub Actions workflow at `.github/workflows/deploy.yml`.
