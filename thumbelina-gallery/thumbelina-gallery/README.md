# Thumbelina gallery

Static site, no build step.

## Deploy on Vercel
- Drag this folder into https://vercel.com/new, or push it to GitHub and import the repo.
- Framework preset: **Other**. Leave build command and output directory empty.

## Customize
- Add photos: copy a new `assets/stickerN.webp` and duplicate one `<figure class="card">` block in `index.html`.
- Colors live in the `:root` variables at the top of `style.css`.
