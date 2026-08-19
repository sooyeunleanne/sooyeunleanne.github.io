# Publishing the blog from Notion

Posts are written in Notion and pulled into the site at build time. The site is
a static export on GitHub Pages, so nothing can call Notion when a reader opens
a page — every post has to be on disk before `next build` runs.

```
Notion database  →  npm run sync:notion  →  content/posts/*.json  →  next build  →  out/blog/<slug>/
                    (prebuild hook)          public/notion/*.png
```

## One-time setup

### 1. Build the Notion database

Create a database (any name) with these properties. Names are matched exactly.

| Property    | Type         | Required | Notes                                              |
| ----------- | ------------ | -------- | -------------------------------------------------- |
| *(title)*   | Title        | yes      | The post title. Any title-typed property works.     |
| `Status`    | Select       | yes      | Only rows set to `Published` are synced.            |
| `Published` | Date         | no       | Sort order and the displayed date. Falls back to the page's created date. |
| `Slug`      | Text         | no       | The URL. Generated from the title when left empty.  |
| `Summary`   | Text         | no       | Shown on the index and used as the meta description.|
| `Tags`      | Multi-select | no       | Rendered as pills.                                  |

Add at least `Draft` and `Published` options to `Status`. A row stays invisible
to the site until it says `Published`, so drafts are safe to leave in the table.

A page cover, if set, becomes the post's header image.

### 2. Create the integration

1. Go to <https://www.notion.so/my-integrations> → **New integration** → internal.
2. Copy the **Internal Integration Secret**.
3. Open the database in Notion → **⋯** → **Connections** → add the integration.

Only what you connect is visible to the token; the rest of the workspace is not.

### 3. Add the repository secrets

In GitHub → Settings → Secrets and variables → Actions:

- `NOTION_TOKEN` — the integration secret
- `NOTION_DATABASE_ID` — the 32-character id in the database URL,
  `notion.so/<workspace>/<DATABASE_ID>?v=...`

### 4. Local development (optional)

Put the same two values in `app/.env.local` (gitignored) to preview posts while
running `npm run dev`:

```
NOTION_TOKEN=secret_...
NOTION_DATABASE_ID=...
```

Without them the sync logs a warning and the blog builds empty, which is why a
fresh clone builds fine with no credentials.

## Publishing a post

1. Write it in Notion. Set `Status` to `Published`.
2. GitHub → **Actions** → **Deploy to GitHub Pages** → **Run workflow**.

The build reruns the sync and redeploys, usually in under two minutes. A daily
scheduled run at 11:00 UTC catches anything published without pressing the
button.

> GitHub disables scheduled workflows on repositories with no commits for 60
> days. If the cron goes quiet, the manual button still works.

## What gets rendered

Paragraphs, headings 1–3 (including toggleable ones), bulleted and numbered
lists with nesting, to-dos, quotes, callouts, toggles, code blocks, images,
video, bookmarks, embeds, files, equations, columns, tables and dividers.

Rich text keeps bold, italic, strikethrough, underline, inline code, links and
Notion's text and background colours.

Anything else renders as nothing and is named in the sync log:

```
[notion] unrendered block types: child_database, synced_block
```

Add a branch for it in `scripts/sync-notion.ts` (`convert`) and a case in
`components/notion/NotionBlocks.tsx` if you start using one.

### Known gaps

- **Code blocks are not syntax highlighted.** The language is shown as a label.
  Adding `shiki` to the renderer would highlight at build time.
- **Equations show LaTeX source**, not typeset maths. KaTeX would fix it.
- **Links between Notion pages are dropped**, since an internal page id has no
  public URL here. Link to the published `/blog/<slug>` instead.

## Why images are copied to `public/notion/`

Notion serves uploaded files from signed S3 URLs that expire about an hour after
they are issued. Linking to one directly would work for the length of a deploy
and then 403 for every reader afterwards, so the sync downloads each image and
rewrites the block to point at the local copy.

`content/posts/` and `public/notion/` are both gitignored and rebuilt from
scratch on every sync — that is what makes a post unpublished in Notion actually
disappear from the site.
