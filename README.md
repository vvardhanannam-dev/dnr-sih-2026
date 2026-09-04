# Smart India Internal Hackathon 2026 Website

## Quick editing

Open `dist/config.js`. The highlighted section at the top contains every item you will normally change:

- Event name, year, college, date and venue
- Registration, WhatsApp and official SIH links
- Dashboard links for About SIH and Problem Statements
- Brochure PDF and presentation PPTX download paths
- About text and problem-statement cards
- Extra link buttons

## Add brochure and PPT files

1. Create the folder `dist/downloads` if it does not exist.
2. Copy your files there.
3. In `dist/config.js`, set the matching path, for example:
   - `brochure: "downloads/SIH-2026-Brochure.pdf"`
   - `pptTemplate: "downloads/SIH-2026-Presentation-Template.pptx"`

Keep file names free of spaces for the simplest setup.

## Change dashboard links

Open `dist/config.js` and find `MANUAL DASHBOARD / EXTERNAL LINKS`. Change the
`aboutSih` or `problemStatements` URL inside quotes. No HTML changes are needed.
The current Problem Statements destination is `https://www.sih.gov.in/sih2026PS`.

## Change logo/banner

Replace `dist/assets/dnr-logo.png` with your updated image using the same filename, or change the image path in `dist/index.html`.

Bottom-card icons can be replaced using the same filenames:

- `dist/assets/whatsapp-logo.png`
- `dist/assets/sih-official-logo.png`

The registration-card icon is an inline dashboard SVG in `dist/app.js`. Search
for `Register Your Team card icon` to find and replace it quickly.

Search `LOADING EFFECT TIME` in `dist/app.js` to change the short loader-effect
duration. The current value is 320 milliseconds.

To change the event dates, open `dist/config.js` and search for
`CHANGE EVENT DATE HERE`. Edit only the date text inside quotes.

The date is displayed below the brochure button. The venue is displayed below
and slightly right of the Register button. Both are editable in `dist/config.js`.
