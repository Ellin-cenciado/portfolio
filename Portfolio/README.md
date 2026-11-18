# Ellin — Systems & Interfaces

A static portfolio for eight selected repositories, built with plain HTML, CSS
and JavaScript. No framework, no build step, no tracking.

## Preview

From this directory:

```bash
python3 -m http.server 8080
```

Open <http://127.0.0.1:8080>.

Any static file server works. Opening `index.html` directly also renders the
page, although the local font loading and SVG behaviour are best served over
HTTP.

## Structure

```text
.
├── index.html          # page shell, copy sections, dialog markup
├── styles.css          # layout, type, colour and diagram styling
├── app.js              # project data, SVG system maps and interactions
├── assets/favicon.svg
└── README.md
```

The source repositories live one level up in `../Projects/` and are not part of
the deployable site.

## Editing the work index

All case studies are data-driven. Edit the `PROJECTS` array at the top of
`app.js` to change:

- titles, categories, taglines and descriptions
- filter memberships (`product`, `systems`, `data`, `hardware`)
- engineering notes, stack lists and stat tiles
- GitHub links and team-project labels

The eight diagrams live in the `DIAGRAMS` object in the same file. They are
hand-built SVGs using the `dg-*` classes defined in `styles.css`.

If you add or remove a project, update the filter counts in `index.html` and the
hero totals (projects, languages, tests) so the summary stays accurate.

## Deployment

The contents of this directory are the site. For GitHub Pages, publish this
folder from the branch of your choice (or copy it into a `docs/` directory and
point Pages at that). The included `.nojekyll` file disables Jekyll processing.

For any other host, upload the directory as-is. There are no environment
variables, server routes or API keys.

## Notes

- Fonts are loaded from Google Fonts with local serif, sans and mono fallbacks.
- The project facts and counts were taken from each repository's README,
  source tree and test suite at the time the portfolio was assembled.
- Team projects are labelled in the interface; the repositories contain the
  shared history.
- Reduced-motion preferences disable the entrance animations.
- Project deep links work directly: `/#webstudy`, `/#big-brother-fs`, etc.
