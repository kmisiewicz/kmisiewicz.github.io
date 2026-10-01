# kmisiewicz.github.io

My portfolio page, built with Jekyll and hosted on GitHub Pages.

## Adding a project

Create a file in `_posts/` named `YYYY-MM-DD-Short-Name.md`. The date orders the projects, and the short name becomes the URL (`/Short-Name/`).

```markdown
---
title: Chromasolver
description: A logic game where the player uses a color gun to manipulate world elements.
tags: [Unity, C#]
image: /images/chromasolver1.png
repo: https://github.com/you/project
build: https://drive.google.com/...
wip: true
---

Write the post in Markdown here.
```

Every field except `title` is optional:

| Field         | Used for                                                                 |
| ------------- | ------------------------------------------------------------------------ |
| `description` | Card text on the home page and the lead paragraph on the post page.      |
| `tags`        | Tag chips on the card and post, and the tag filter on the home page.     |
| `image`       | Card cover. Without it the card shows a placeholder with the title's first letter. |
| `repo`        | "Repository" button under the post title.                                |
| `build`       | "Download build" button under the post title.                            |
| `wip`         | "WIP" badge on the card and post.                                        |

## Images and videos

Put image files in `images/`.

A single image uses plain Markdown:

```markdown
![Editor window](/images/haptic-editor3.png)
```

To place images side by side, use the gallery include. Bare file names are looked up in `images/`; full URLs and paths starting with `/` are used as they are. `caption` and `alt` are optional.

```liquid
{% include gallery.html images="oswald1.png, oswald2.png" caption="Level 1 and 2" %}
```

Videos are embedded responsively at 16:9:

```liquid
{% include video.html vimeo="342792919" %}
{% include video.html youtube="5QajDu9X1_w" %}
{% include video.html file="/videos/clip.mp4" %}
{% include video.html src="https://any-other-site/embed/..." %}
```

`title` and `caption` are optional. An `<iframe>` embed code pasted directly into a post is also scaled to fit the column. Click any image in a post to view it full size.

## Look and settings

Everything site-wide lives in `_config.yml`:

- `accent` sets the accent palette: `cyan`, `violet`, `amber`, `rose`, `lime` or `emerald`.
- `headline` and `intro` set the home page hero text. `tagline` appears in the home page's browser-tab title.
- `socials` sets the icon links in the header, hero and footer. Leave a value empty to hide that icon.

Palettes are defined in `_sass/_tokens.scss`. To add one, add a line to the `$palettes` map.
