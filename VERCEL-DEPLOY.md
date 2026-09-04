# Deploy this SIH website on Vercel

## Before deployment

1. Open `dist/config.js` and replace the registration and WhatsApp links.
2. Put the brochure PDF and PPTX template inside `dist/downloads/`.
3. Keep their filenames equal to the paths written in `dist/config.js`.

## Vercel deployment

1. Extract this ZIP and upload the complete folder to GitHub.
2. In Vercel, select **Add New → Project** and import the repository.
3. Leave **Framework Preset** as **Other**.
4. Do not change the Root Directory.
5. Click **Deploy**. The included `vercel.json` publishes `dist/` automatically.

## Important editing files

- `dist/config.js`: event text, date, venue, links and download paths.
- `dist/index.html`: page sections and visible structure.
- `dist/styles.css`: colors, sizes, layout and responsive design.
- `dist/app.js`: animations, cards, menu and loading duration.
- `dist/assets/`: college, SIH and WhatsApp logos.
- `dist/downloads/`: brochure PDF and presentation template.

Clear comments are included throughout the code for future editing.
